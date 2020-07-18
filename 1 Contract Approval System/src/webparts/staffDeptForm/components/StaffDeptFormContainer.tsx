import * as React from "react";
import { IStaffDeptFormContainerProps } from "./IStaffDeptFormContainerProps";
import StaffDeptForm from "./StaffDeptForm";
import { IStaffDeptFormContainerState } from "./IStaffDeptFormContainerState";
import { sp, List } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import { WebConfig } from "../../ComComponents/webconfig";
import * as moment from "moment";

export default class StaffDeptFormContainer extends React.Component<
  IStaffDeptFormContainerProps,
  IStaffDeptFormContainerState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      deptOptions: [],
      staffItems: []
    };
  }

  public render(): React.ReactElement<IStaffDeptFormContainerProps> {
    return (
      <StaffDeptForm
        deptOptions={this.state.deptOptions}
        staffItems={this.state.staffItems}
        updateContractItems={this.updateContractItems}
        deleteStaffItems={this.deleteStaffItems}
        addStaffItem={this.addStaffItem}
        updateStaffItem={this.updateStaffItem}
      />
    );
  }

  public componentDidMount(): void {
    this.fetchDeptOptions();
    this.fetchStaffItems();
  }

  private fetchDeptOptions(): void {
    sp.web.currentUser.get().then(u => {
      sp.web.lists
        .getByTitle(WebConfig.DeptsListName)
        .items.get()
        .then(items => {
          let deptOptions: any[] = [];
          items.map(item => {
            deptOptions.push({ key: item.Id, text: item.Title });
          });
          this.setState({ deptOptions: deptOptions });
        });
    });
  }

  private fetchStaffItems: () => void = () => {
    sp.web.lists
      .getByTitle(WebConfig.StaffDeptListName)
      .items.select("*", "Author/Title", "Staff/Title", "Dept/Title")
      .expand("Author", "Staff", "Dept/Id")
      .orderBy("Modified", false)
      .getAll()
      .then(result => {
        //staffItems
        let staffItems: any[] = [];
        result.map(item => {
          staffItems.push({
            key: item.Id,
            Staff: item.Staff ? item.Staff.Title : "",
            Dept: item.Dept.Title,
            Created: moment(item.Created, moment.ISO_8601).format(
              "YYYY/MM/DD HH:mm:ss"
            ),
            Author: item.Author.Title
          });
        });
        this.setState({ staffItems: staffItems });
      })
      .catch(error => {
        console.log(error);
      });
  };

  private updateContractItems: (StaffId: number, DeptId: number) => void = (
    StaffId: number,
    DeptId: number
  ) => {
    sp.web.lists
      .getByTitle(WebConfig.requestedItemsListName)
      .items.filter("AuthorId eq " + StaffId)
      .orderBy("Id", false)
      .getAll()
      .then(items => {
        let list: List = sp.web.lists.getByTitle(
          WebConfig.requestedItemsListName
        );

        let batch = sp.web.createBatch();

        items.map(item => {
          list.items
            .getById(item.Id)
            .inBatch(batch)
            .update({ StaffDeptId: DeptId })
            .then(() => {
              console.log("更新" + item.Id + "成功");
            });
        });

        return batch
          .execute()
          .then(() => console.log("update completed"))
          .catch((error: any) => console.log(error));
      });
  };

  private deleteStaffItems: (staffItems: any[]) => Promise<void> = (
    staffItems: any[]
  ) => {
    let list: List = sp.web.lists.getByTitle(WebConfig.StaffDeptListName);

    let batch = sp.web.createBatch();

    staffItems.map((item: any) => {
      list.items
        .getById(item.key)
        .inBatch(batch)
        .delete()
        .then(() => {
          console.log(`delete ${item.Staff}`);
        })
        .catch((error: any) => console.log(error));
    });

    return batch.execute().then(() => {
      this.fetchStaffItems();
      console.log("deletion completed");
    });
  };

  private addStaffItem: (
    staffId: number,
    deptId: number,
    shouldChangeExisting: boolean
  ) => Promise<void> = (
    staffId: number,
    deptId: number,
    shouldChangeExisting: boolean
  ) => {
    return sp.web.lists
      .getByTitle(WebConfig.StaffDeptListName)
      .items.add({
        StaffId: staffId,
        DeptId: deptId
      })
      .then(() => {
        if (shouldChangeExisting) {
          this.updateContractItems(staffId, deptId);
        }
        this.fetchStaffItems();
      });
  };

  private updateStaffItem: (
    staffItemId: number,
    staffId: number,
    deptId: number,
    shouldChangeExisting: boolean
  ) => Promise<void> = (
    staffItemId: number,
    staffId: number,
    deptId: number,
    shouldChangeExisting: boolean
  ) => {
    return sp.web.lists
      .getByTitle(WebConfig.StaffDeptListName)
      .items.getById(staffItemId)
      .update({
        StaffId: staffId,
        DeptId: deptId
      })
      .then(() => {
        if (shouldChangeExisting) {
          this.updateContractItems(staffId, deptId);
        }
        this.fetchStaffItems();
      });
  };
}
