import * as React from "react";
import styles from "./StaffDeptForm.module.scss";
import { IStaffDeptFormProps } from "./IStaffDeptFormProps";
import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import { WebConfig } from "../../ComComponents/webconfig";
import UxpList from "../../ComComponents/UxpList/UxpList";
import {
  IObjectWithKey,
  SelectionMode
} from "office-ui-fabric-react/lib/DetailsList";
import { IStaffDeptFormState } from "./IStaffDeptFormState";
import { Dropdown, IDropdownOption } from "office-ui-fabric-react/lib/Dropdown";
import { Checkbox } from "office-ui-fabric-react/lib/Checkbox";
import {
  DefaultButton,
  PrimaryButton
} from "office-ui-fabric-react/lib/Button";
import {
  Dialog,
  DialogFooter,
  DialogType
} from "office-ui-fabric-react/lib/Dialog";
import {
  OfficeUiFabricPeoplePickerContainer,
  IOfficeUiFabricPeoplePickerSelection
} from "../../../components/officeUiFabricPeoplePicker";

export default class StaffDeptForm extends React.Component<
  IStaffDeptFormProps,
  IStaffDeptFormState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      StaffIds: [], // undefined,
      DeptId: undefined,
      ChangeExists: false,
      ErrMsg: "",
      hideDeleteDialog: true,
      curItemId: 0,
      selectedItems: []
    };
  }
  public render(): React.ReactElement<IStaffDeptFormProps> {
    return (
      <div className={styles.staffDeptForm}>
        <div className={styles.container}>
          <fieldset>
            <legend>
              <h3>新建员工部门信息</h3>
            </legend>
            <div className="ms-Grid">
              <div className="ms-Grid-row">
                <div
                  className="ms-Grid-col ms-sm12 ms-md6 ms-lg6"
                  style={{ paddingLeft: "10px", paddingRight: "20px" }}
                >
                  <OfficeUiFabricPeoplePickerContainer
                    label={"员工邮箱"}
                    principalTypeUser={true}
                    principalTypeSharePointGroup={false}
                    principalTypeSecurityGroup={false}
                    principalTypeDistributionList={false}
                    itemLimit={1}
                    maximumEntitySuggestions={5}
                    onChange={this._StaffChanged}
                    selections={this.state.selections}
                  />
                </div>
                <div
                  className="ms-Grid-col ms-sm12 ms-md6 ms-lg6"
                  style={{ paddingLeft: "10px", paddingRight: "20px" }}
                >
                  <Dropdown
                    label={"部门"}
                    selectedKey={this.state.DeptId ? this.state.DeptId : null}
                    options={this.props.deptOptions}
                    onChanged={this.changeDeptState}
                  />
                </div>
              </div>
              <div className="ms-Grid-row" style={{ marginTop: "10px" }}>
                <div
                  className="ms-Grid-col ms-sm12 ms-md6 ms-lg6"
                  style={{ paddingLeft: "10px", paddingRight: "20px" }}
                >
                  <Checkbox
                    label="变更已有合同申请"
                    checked={this.state.ChangeExists}
                    onChange={this._onExistsChange}
                    ariaDescribedBy={"descriptionID"}
                  />
                </div>
                <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6">
                  <DefaultButton
                    data-automation-id="btnApp"
                    checked={true}
                    text={this.state.curItemId === 0 ? "确认添加" : "确认修改"}
                    onClick={this._AddClicked}
                  />
                </div>
              </div>
              <div style={{ width: "100%", textAlign: "center" }}>
                <span style={{ color: "Red" }}>{this.state.ErrMsg}</span>
              </div>
            </div>
          </fieldset>
          <hr />
          <UxpList
            data={this.props.staffItems}
            schemaFields={[
              {
                ariaLabel: "员工邮箱",
                Name: "Staff"
              },
              {
                ariaLabel: "部门",
                Name: "Dept"
              },
              {
                ariaLabel: "添加时间",
                Name: "Created"
              },
              {
                ariaLabel: "添加人",
                Name: "Author"
              }
            ]}
            onDeleteButtonClicked={this.onDeleteStaffs}
            selectionMode={SelectionMode.multiple}
            hiddenFields={["key"]}
            // newButtonTitle="新建"
            label={"已添加的员工部门配置"}
          />
        </div>
        <Dialog
          hidden={this.state.hideDeleteDialog}
          onDismiss={this._closeDeleteDialog}
          dialogContentProps={{
            type: DialogType.normal,
            title: "删除确认",
            subText: "你确认要删除选中记录吗?"
          }}
          modalProps={{
            isBlocking: false
          }}
        >
          <DialogFooter>
            <PrimaryButton onClick={this._deleteStaffs} text={"删除记录"} />
            <DefaultButton onClick={this._closeDeleteDialog} text="取消" />
          </DialogFooter>
        </Dialog>
      </div>
    );
  }
  private _StaffChanged = (staffs?: IOfficeUiFabricPeoplePickerSelection[]) => {
    let itemId: number = 0;
    if (staffs.length > 0) {
      sp.web.lists
        .getByTitle(WebConfig.StaffDeptListName)
        .items.filter("StaffId eq " + staffs[0].id)
        .get()
        .then(staffItems => {
          if (staffItems.length > 0) {
            itemId = staffItems[0].Id;
          }
          this.setState({ StaffIds: [staffs[0].id], curItemId: itemId });
        });
    } else {
      this.setState({ StaffIds: [], curItemId: itemId });
    }
  };

  private changeDeptState = (item: IDropdownOption) => {
    this.setState({ DeptId: item.key as number });
  };

  private _onExistsChange = (_, isChecked: boolean) => {
    this.setState({ ChangeExists: isChecked });
  };

  private _AddClicked = () => {
    // console.log(this.state.StaffDept);
    if (this.state.StaffIds.length === 0) {
      alert("请填写有效的员工邮箱。");
      return;
    } else if (this.state.DeptId === undefined) {
      alert("请选择部门。");
      return;
    }

    if (this.state.StaffIds.length > 0 && this.state.DeptId) {
      if (this.state.curItemId === 0) {
        this.props
          .addStaffItem(
            this.state.StaffIds[0],
            this.state.DeptId,
            this.state.ChangeExists
          )
          .then(() => {
            this.setState(
              {
                StaffIds: [],
                DeptId: undefined,
                ChangeExists: false,
                ErrMsg: "添加成功！",
                selections: []
              },
              () => {
                setTimeout(() => {
                  this.setState(() => ({ ErrMsg: "" }));
                }, 2000);
              }
            );
          })
          .catch((error: any) => {
            let errMsg: string = error.data
              ? error.data.responseBody["odata.error"].message.value
              : error.message;
            this.setState({ ErrMsg: "添加失败:" + errMsg });
          });
      } else {
        this.props
          .updateStaffItem(
            this.state.curItemId,
            this.state.StaffIds[0],
            this.state.DeptId,
            this.state.ChangeExists
          )
          .then(item => {
            this.setState(
              {
                StaffIds: [],
                DeptId: null,
                ChangeExists: false,
                ErrMsg: "修改成功！",
                selections: []
              },
              () => {
                setTimeout(() => {
                  this.setState(() => ({ ErrMsg: "" }));
                }, 2000);
              }
            );
          })
          .catch((error: any) => {
            let errMsg: string = error.data
              ? error.data.responseBody["odata.error"].message.value
              : error.message;
            this.setState({ ErrMsg: "修改失败:" + errMsg });
          });
      }
    }
  };

  private onDeleteStaffs = (items: IObjectWithKey[]) => {
    this.setState({ hideDeleteDialog: false, selectedItems: items });
  };

  private _closeDeleteDialog = () => {
    this.setState({ hideDeleteDialog: true });
  };

  private _deleteStaffs = () => {
    this.props
      .deleteStaffItems(this.state.selectedItems)
      .then(() => {
        this._closeDeleteDialog();
      })
      .catch((error: any) => {
        console.log(error);
        this._closeDeleteDialog();
      });
  };
}
