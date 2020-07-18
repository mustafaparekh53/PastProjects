export interface IEmailTemplate {
  subject: string;
  body: string;
}
export interface IWebConfig {
  hosturl: string;
  /*合同主体列表名称 */
  subjectsListName: string;
  /*合同申请列表名称 */
  // requestsListName:string;
  /*合同项列表名称 */
  requestedItemsListName: string;
  /*合同类别列表名称 */
  contractTypeListName: string;
  /*审批结果列表 */
  AddrListName: string;
  DeptsListName: string;
  StaffDeptListName: string;
  SystemName: string;
  CreatedByMeListPage: string;
  NewContractPage: string;
  InapprovalListPage: string;
  ApprovalPage: string;
  EmailToApprovalTemplate: IEmailTemplate;
  EmailToMeTemplate: IEmailTemplate;
  EmailResultTemplate: IEmailTemplate;
  EmailToLawyerTemplate: IEmailTemplate;
  MyCusCssUrl: string;
  AdminGroupName: string;
}
export const CurrentUrl: string =
  window.location.href.substr(0, window.location.href.indexOf("/", 10)) +
  window.location.pathname;
export const WebConfig: IWebConfig = {
  hosturl: "https://esquel.sharepoint.com",
  AdminGroupName: "CasSiteAdmin",
  MyCusCssUrl:
    document.location.href.indexOf("workbench.aspx") > 0
      ? "../../SiteAssets/MyCusCss.css"
      : "../SiteAssets/MyCusCss.css",
  subjectsListName: "Contract_Subjects",
  // requestsListName: "Contract_Requests",
  requestedItemsListName: "Contract_Items",
  contractTypeListName: "Contract_types",
  AddrListName: "Contract_Results",
  StaffDeptListName: "Contract_StaffDepts",
  DeptsListName: "Contract_Depts",
  SystemName: "合同审批系统",
  CreatedByMeListPage: "mycontracts.aspx",
  NewContractPage: "newcontract.aspx",
  InapprovalListPage: "inapprovallist.aspx",
  ApprovalPage: "approval.aspx",
  EmailToApprovalTemplate: {
    subject: "申请人{0}已提交合同审批单，请审批",
    body:
      "<div><div>亲爱的同事，</div><p>&nbsp;&nbsp;请在{0}中帮忙审批以下合同。谢谢 \
        </p><p>{1}</p>"
  },
  EmailToMeTemplate: {
    subject: "合同审批单已提交成功！",
    body:
      "<div>您的申请单已经提交成功，请尽快提交纸质版合同给审批人审批，可{0}看详情和审批情况。</div> \
<table border=1 cellspacing=0> \
<tr><td style='max-width:300px;word-break:break-all; '>合同审批单号</td><td>审批人</td></tr> \
{1} \
</table>"
  },
  EmailResultTemplate: {
    subject: "您提交的合同{0}审批单{1}已被{2}审批{3}！",
    body:
      "<div><div>亲爱的同事，</div><p>&nbsp;&nbsp;您提交的合同{0}审批单{1}已被{2}审批{3}! \
        </p>{4}<p>可在{5}中查看详情和审批情况。</p>"
  },
  EmailToLawyerTemplate: {
    subject: "申请人{0}提交的{1}合同审批单已通过审价，请您审批",
    body:
      "<div><div>亲爱的同事，</div><p>&nbsp;&nbsp;请在{0}中帮忙审批{1}，审批单号{2}。谢谢 \
    </p>"
  }
};
