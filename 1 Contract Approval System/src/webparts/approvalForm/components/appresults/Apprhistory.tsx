import React = require("react");
import { IAppresultporp } from "./IAppresultprop";
import { IAppresultstate, IAppresult } from "./IAppresult";
import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import styles from "./Apprhistory.module.scss";
import { WebConfig } from "../../../ComComponents/webconfig";
import * as moment from "moment";
import "moment/locale/zh-cn";
export class Apprhistory extends React.Component<
  IAppresultporp,
  IAppresultstate
> {
  constructor(props: any) {
    super(props);
    this.state = { historyItem: [] };
  }
  public render(): React.ReactElement<IAppresultporp> {
    if (this.state.historyItem.length > 0) {
      return (
        <table className={"table " + styles.tbhistory}>
          <colgroup>
            <col style={{ width: "20%" }} />
            <col style={{ width: "15%" }} />
            <col style={{ width: "25%" }} />
            <col style={{ width: "15%" }} />
            <col style={{ width: "25%" }} />
          </colgroup>
          <thead>
            <tr>
              <th className="title" colSpan={5}>
                历史审批情况{" "}
              </th>
            </tr>
            <tr>
              <td>审批步骤</td>
              <td>审批结果</td>
              <td>审批意见</td>
              <td>审批日期</td>
              <td>审批人</td>
            </tr>
          </thead>
          {this.state.historyItem.map(hitem => {
            return (
              <tr>
                <td>{hitem.position + "审批"}</td>
                <td>
                  {hitem.result
                    ? hitem.position.indexOf("审价") >= 0
                      ? "价格已审"
                      : "合同已审"
                    : "驳回"}
                </td>
                <td
                  className="descCont"
                  dangerouslySetInnerHTML={{
                    __html:
                      hitem.description +
                      (hitem.AttachmentFiles
                        ? "<div>" +
                          hitem.AttachmentFiles.map(item => {
                            return `<a href=${
                              item.ServerRelativeUrl
                            } target="_blank">
                                ${item.FileName}
                              </a>`;
                          }).join(",") +
                          "</div>"
                        : "")
                  }}
                />
                <td>{hitem.Created}</td>
                <td className="tdUserName">{hitem.Author}</td>
              </tr>
            );
          })}
        </table>
      );
    }
    return (
      <div>
        <label>暂无审批记录</label>
      </div>
    );
  }
  public componentDidMount(): void {
    //  console.log("apprhistory log。。。。");
    const itemid: number = this.props.contractitemid;
    sp.web.lists
      .getByTitle(WebConfig.AddrListName)
      .items.filter(`itemidId eq ${itemid} and submited eq 1`)
      .orderBy("Id", true)
      .select("*", "Author/Title", "AttachmentFiles")
      .expand("Author", "AttachmentFiles")
      .get()
      .then(items => {
        // console.log(items);
        let datas: IAppresult[] = [];
        items.map((item: any, index: number) => {
          datas.push({
            description: item.description,
            result: item.result,
            position: item.Title,
            Created: moment(item.Created, moment.ISO_8601).format(
              "YYYY/MM/DD HH:mm:ss"
            ),
            AttachmentFiles: item.AttachmentFiles.map(fileinfo => {
              return {
                ServerRelativeUrl: fileinfo.ServerRelativeUrl,
                FileName: fileinfo.FileName
              };
            }),
            Author: item.Author.Title
          });
        });
        this.setState({ historyItem: datas });
      });
  }
}
