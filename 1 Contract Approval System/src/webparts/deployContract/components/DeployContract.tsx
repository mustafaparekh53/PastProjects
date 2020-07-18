import * as React from "react";
import styles from "./DeployContract.module.scss";
import { IDeployContractProps } from "./IDeployContractProps";
import {
  sp,
  ListEnsureResult,
  FieldUserSelectionMode,
  FieldCreationProperties,
  DateTimeFieldFormatType,
  CalendarType
} from "@pnp/sp";
import "@pnp/polyfill-ie11";
import { WebConfig } from "../../ComComponents/webconfig";
import { autobind } from "office-ui-fabric-react/lib/Utilities";
import * as objectAssign from "object-assign";
export default class DeployContract extends React.Component<
  IDeployContractProps,
  any
> {
  private statusText: string[] = [
    "(待执行)",
    "(正在执行)",
    "(完成)",
    "(有错误)",
    "(列表已存在，跳过)"
  ];
  constructor(props: any) {
    super(props);
    this.state = {
      step1: 0,
      step2: 0,
      step3: 0,
      step4: 0,
      step5: 0,
      step6: 0,
      step7: 0,
      messages: []
    };
  }
  public render(): React.ReactElement<IDeployContractProps> {
    return (
      <div className={styles.deployContract}>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js" />
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div>
                <button type="button" id="btnStart" onClick={this.startDeploy}>
                  开始部署
                </button>
              </div>
              <div id="dccontents">
                <div id="dcstep_5" className="dcstep">
                  1.创建列表
                  {WebConfig.StaffDeptListName}
                  <span className="StepStus" id="stepstatus_5">
                    {this.statusText[this.state.step5]}
                  </span>
                </div>
                <div id="dcstep_1" className="dcstep">
                  2.创建列表
                  {WebConfig.contractTypeListName}
                  <span className="StepStus" id="stepstatus_1">
                    {this.statusText[this.state.step1]}
                  </span>
                </div>
                <div id="dcstep_2" className="dcstep">
                  3.创建列表
                  {WebConfig.subjectsListName}
                  <span className="StepStus" id="stepstatus_2">
                    {this.statusText[this.state.step2]}
                  </span>
                </div>
                <div id="dcstep_3" className="dcstep">
                  4.创建列表
                  {WebConfig.requestedItemsListName}
                  <span className="StepStus" id="stepstatus_3">
                    {this.statusText[this.state.step3]}
                  </span>
                </div>
                <div id="dcstep_4" className="dcstep">
                  5.创建列表
                  {WebConfig.AddrListName}
                  <span className="StepStus" id="stepstatus_4">
                    {this.statusText[this.state.step4]}
                  </span>
                </div>
                <div id="dcstep_6" className="dcstep">
                  6.添加列表
                  {WebConfig.subjectsListName}
                  数据
                  <span className="StepStus" id="stepstatus_6">
                    {this.statusText[this.state.step6]}
                  </span>
                </div>
                <div id="dcstep_7" className="dcstep">
                  7.添加列表
                  {WebConfig.contractTypeListName}
                  数据
                  <span className="StepStus" id="stepstatus_7">
                    {this.statusText[this.state.step7]}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div>
              <ol>
                {this.state.messages.map(msg => {
                  return `<li>${msg}</li>`;
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
  @autobind
  private startDeploy(): void {
    this.runStep5();
    this.runStep2();
  }
  private runStep1(DeptsGuid: string): void {
    this.setState({ step1: 1 });
    sp.web.lists
      .ensure(WebConfig.contractTypeListName, "合同类别设置")
      .then((ler: ListEnsureResult) => {
        console.log(ler);
        if (ler.created) {
          console.log("list exists");
          //do some awesome stuff with the list
          /*  ler.list.fields
            .getByInternalNameOrTitle("Title")
            .get()
            .then(field => {
              console.log(field);
            });*/
          ler.list.fields
            .getByInternalNameOrTitle("Title")
            .update(
              {
                Title: "Title",
                MaxLength: 50,
                Indexed: true,
                EnforceUniqueValues: true
              },
              "SP.FieldText"
            ) // .update({Title:"Title",})
            .then(filedresult => {
              console.log(filedresult);
              ler.list.fields
                .addUser("pricecenterId", FieldUserSelectionMode.PeopleOnly, {
                  Title: "pricecenter"
                } as FieldCreationProperties)
                .then(ft2 => {
                  console.log(ft2);
                  ler.list.fields
                    .addUser("laywerId", FieldUserSelectionMode.PeopleOnly, {
                      Title: "laywer"
                    } as FieldCreationProperties)
                    .then(ft1 => {
                      console.log(ft1);
                      ler.list.fields
                        .addUser(
                          "otherpricecentersId",
                          FieldUserSelectionMode.PeopleOnly,
                          {
                            Title: "otherpricecenters",
                            AllowMultipleValues: true
                          }
                        )
                        .then(ft0 => {
                          console.log(ft0);
                          ler.list.fields
                            .addUser(
                              "otherlawyersId",
                              FieldUserSelectionMode.PeopleOnly,
                              {
                                Title: "otherlawyers",
                                AllowMultipleValues: true
                              }
                            )
                            .then(frst0 => {
                              console.log(frst0);
                              ler.list.fields
                                .addBoolean("ToPriceCenter", {
                                  Description: "送审价吗"
                                })
                                .then(frst => {
                                  console.log(frst);
                                  ler.list.fields
                                    .getByTitle("ToPriceCenter")
                                    .update(
                                      { DefaultValue: "No" },
                                      "SP.FieldChoice"
                                    )
                                    .then(fresult => {
                                      console.log(fresult);
                                    });
                                  this.setState({ step1: 2 });
                                  this.runStep3(ler.data.Id, DeptsGuid);
                                });
                            });
                        });
                    });
                });
            })
            .catch(err => {
              let msgs: string[] = [];
              objectAssign(msgs, this.state.messages);
              msgs.push(err.message);
              this.setState({ step1: 3, messages: msgs });
            });

          // ler.list.fields.getByTitle("ToPriceCenter").update()
        } else {
          console.log(WebConfig.contractTypeListName + " has exists");
          this.setState({ step1: 4 });
          sp.web.lists
            .getByTitle(WebConfig.contractTypeListName)
            .get()
            .then(list => {
              console.log(list);
              this.runStep3(list.Id, DeptsGuid);
            });

          /*ler.list.fields
            .getByTitle("otherpricecenters")
            .get()
            .then(filedresult => {
              console.log(filedresult);
            });*/
        }
      });
  }
  private runStep2(): void {
    this.setState({ step2: 1 });
    sp.web.lists
      .ensure(WebConfig.subjectsListName, "合同主体设置")
      .then((ler: ListEnsureResult) => {
        if (ler.created) {
          ler.list.fields
            .getByInternalNameOrTitle("Title")
            .update(
              {
                Title: "Title",
                MaxLength: 50,
                Indexed: true,
                EnforceUniqueValues: true
              },
              "SP.FieldText"
            )
            .then(filedresult => {
              ler.list.fields.addText("abbreviation", 10).then(fresult => {
                this.setState({ step2: 2 });
                this.runStep6();
              });
            });
        } else {
          this.setState({ step2: 4 });
          this.runStep6();
        }
      });
  }
  private runStep3(ContractTypeGuid: string, DeptGuid: string): void {
    this.setState({ step3: 1 });
    sp.web.lists
      .ensure(WebConfig.requestedItemsListName, "合同申请列表")
      .then((ler: ListEnsureResult) => {
        if (ler.created) {
          ler.list.fields
            .getByInternalNameOrTitle("Title")
            .update(
              {
                Title: "Title",
                Description: "合同名称",
                MaxLength: 100
              },
              "SP.FieldText"
            )
            .then(filedresult => {
              ler.list.fields
                .addText("ContractNo", 64, {
                  Description: "合同编号",
                  Indexed: true,
                  EnforceUniqueValues: true
                })
                .then(fresult => {
                  console.log(ContractTypeGuid);
                  ler.list.fields
                    .addLookup("ContractType", ContractTypeGuid, "Title")
                    .then(f0 => {
                      ler.list.fields
                        .addText("ContractObject", 100)
                        .then(fx => {
                          ler.list.fields
                            .addNumber("Money", 0, 999999999, {
                              Description: "金额"
                            })
                            .then(f1 => {
                              ler.list.fields
                                .addChoice(
                                  "Currency",
                                  ["RMB", "USD", "EUR", "N/A"],
                                  undefined,
                                  true,
                                  { Required: true }
                                )
                                .then(f6 => {
                                  ler.list.fields
                                    .addText("PayWay", 50, {
                                      Required: true,
                                      Description: "支付方式"
                                    })
                                    .then(f7 => {
                                      ler.list.fields
                                        .addBoolean("NeedApproval", {
                                          Description: "是否送审价中心审批",
                                          Required: true
                                        })
                                        .then(f8 => {
                                          ler.list.fields
                                            .addText("remarks", 255, {
                                              Description: "备注信息"
                                            })
                                            .then(f9 => {
                                              ler.list.fields
                                                .addUser(
                                                  "lawyer",
                                                  FieldUserSelectionMode.PeopleOnly,
                                                  { Title: "lawyer" }
                                                )
                                                .then(f10 => {
                                                  ler.list.fields
                                                    .addUser(
                                                      "pricingcenter",
                                                      FieldUserSelectionMode.PeopleOnly
                                                    )
                                                    .then(f11 => {
                                                      ler.list.fields
                                                        .addText(
                                                          "requestNo",
                                                          20,
                                                          {
                                                            EnforceUniqueValues: true,
                                                            Description: "编号",
                                                            Indexed: true
                                                          }
                                                        )
                                                        .then(f12 => {
                                                          ler.list.fields
                                                            .addText(
                                                              "mainbody",
                                                              50,
                                                              {
                                                                Description:
                                                                  "合同主体"
                                                              }
                                                            )
                                                            .then(f5 => {
                                                              ler.list.fields
                                                                .addText(
                                                                  "RelativeParty",
                                                                  50,
                                                                  {
                                                                    Description:
                                                                      "合同相对方"
                                                                  }
                                                                )
                                                                .then(f4 => {
                                                                  ler.list.fields
                                                                    .addText(
                                                                      "FactoryDept",
                                                                      50,
                                                                      {
                                                                        Description:
                                                                          "厂部"
                                                                      }
                                                                    )
                                                                    .then(
                                                                      f3 => {
                                                                        ler.list.fields
                                                                          .addText(
                                                                            "status",
                                                                            10,
                                                                            {
                                                                              Description:
                                                                                "状态"
                                                                            }
                                                                          )
                                                                          .then(
                                                                            f2 => {
                                                                              ler.list.fields
                                                                                .addDateTime(
                                                                                  "signingDate",
                                                                                  DateTimeFieldFormatType.DateOnly,
                                                                                  CalendarType.ChineseLunar,
                                                                                  undefined,
                                                                                  {
                                                                                    Description:
                                                                                      "合同签订日期"
                                                                                  }
                                                                                )
                                                                                .then(
                                                                                  f1x => {
                                                                                    ler.list.fields
                                                                                      .addUser(
                                                                                        "representative",
                                                                                        FieldUserSelectionMode.PeopleOnly,
                                                                                        {
                                                                                          Description:
                                                                                            "合同签订人"
                                                                                        }
                                                                                      )
                                                                                      .then(
                                                                                        f20 => {
                                                                                          ler.list.fields
                                                                                            .addLookup(
                                                                                              "StaffDept",
                                                                                              DeptGuid,
                                                                                              "Title"
                                                                                            )
                                                                                            .then(
                                                                                              f21 => {
                                                                                                ler.list.fields
                                                                                                  .addText(
                                                                                                    "applog",
                                                                                                    200,
                                                                                                    {
                                                                                                      // Hidden: true
                                                                                                    }
                                                                                                  )
                                                                                                  .then(
                                                                                                    f22 => {
                                                                                                      console.log(
                                                                                                        "created applog"
                                                                                                      );
                                                                                                      this.setState(
                                                                                                        {
                                                                                                          step3: 2
                                                                                                        }
                                                                                                      );
                                                                                                      this.runStep4(
                                                                                                        ler
                                                                                                          .data
                                                                                                          .Id
                                                                                                      );
                                                                                                    }
                                                                                                  );
                                                                                              }
                                                                                            );
                                                                                        }
                                                                                      );
                                                                                  }
                                                                                );
                                                                            }
                                                                          );
                                                                      }
                                                                    );
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            })
            .catch(err => {
              let msgs: string[] = [];
              objectAssign(msgs, this.state.messages);
              msgs.push(err.message);
              this.setState({ step3: 3, messages: msgs });
            });
        } else {
          this.setState({ step3: 4 });
          this.runStep4(ler.data.Id);
        }
      });
  }

  private runStep4(ContractItemGuid: string): void {
    this.setState({ step4: 1 });
    sp.web.lists
      .ensure(WebConfig.AddrListName, "审批结果列表")
      .then((ler: ListEnsureResult) => {
        if (ler.created) {
          ler.list.fields
            .getByInternalNameOrTitle("Title")
            .update(
              {
                Title: "title",
                MaxLength: 10
              },
              "SP.FieldText"
            )
            .then(filedresult => {
              ler.list.fields
                .addBoolean("result", { Description: "是否通过" })
                .then(fresult => {
                  ler.list.fields
                    .addBoolean("submited", { Description: "是否已提交" })
                    .then(fsubmited => {
                      ler.list.fields
                        .addMultilineText(
                          "description",
                          10,
                          true,
                          true,
                          true,
                          true,
                          {
                            Description: "审批意见"
                            // SchemaXml:
                            // tslint:disable-next-line:max-line-length
                            //   '<Field DisplayName="description" Type="Note" Required="true" ID="{87e93b22-d3d1-4614-8716-3b529e38912e}" SourceID="{5727f1c4-148f-43c1-81b0-a8189913998b}" StaticName="description" Name="description" ColName="ntext2" RowOrdinal="0" AllowHyperlink="TRUE" AppendOnly="true" NumLines="10" RestrictedMode="TRUE" RichText="TRUE" Description="" Version="2" CustomFormatter="" EnforceUniqueValues="true" Indexed="true" RichTextMode="FullHtml" IsolateStyles="TRUE" />'
                          }
                        )
                        .then(f0 => {
                          console.log(f0);
                          let schxml: string = f0.data.SchemaXml;
                          schxml = schxml.replace(`Version="1"`, `Version="2"`);
                          schxml = schxml.replace(
                            "/>",
                            `CustomFormatter=""  EnforceUniqueValues="false" Indexed="false" RichTextMode="FullHtml" IsolateStyles="TRUE" />`
                          );
                          f0.field.update({ SchemaXml: schxml }).then(r => {
                            console.log(r);
                            ler.list.fields
                              .addLookup("itemid", ContractItemGuid, "Title", {
                                Required: true
                              })
                              .then(f1 => {
                                ler.list.fields
                                  .addText("sendtype", 20, {
                                    Description: "寄取方式"
                                  })
                                  .then(f2 => {
                                    this.setState({ step4: 2 });
                                    this.runStep7();
                                  });
                              });
                          });
                        });
                    });
                });
            });
          // this.runStep5();
        } else {
          this.setState({ step4: 4 });
          // this.runStep5();
        }
      });
  }
  private runStep5(): void {
    this.setState({ step5: 1 });
    sp.web.lists
      .ensure(WebConfig.DeptsListName, "部门配置表")
      .then((ler: ListEnsureResult) => {
        if (ler.created) {
          ler.list.fields
            .getByInternalNameOrTitle("Title")
            .update(
              {
                Title: "title",
                MaxLength: 20,
                Indexed: true,
                EnforceUniqueValues: true
              },
              "SP.FieldText"
            )
            .then(s0 => {
              ler.list.items.add({ Title: "采购部" }).then(its => {
                console.log("已添加采购部");
              });
              sp.web.lists
                .ensure(WebConfig.StaffDeptListName, "申请人部门配置表")
                .then((ler2: ListEnsureResult) => {
                  if (ler2.created) {
                    ler2.list.fields
                      .getByInternalNameOrTitle("Title")
                      .update(
                        {
                          Title: "title",
                          Required: true,
                          Hidden: true
                        },
                        "SP.FieldText"
                      )
                      .then(sd0 => {
                        ler2.list.fields
                          .addUser("Staff", FieldUserSelectionMode.PeopleOnly, {
                            Description: "申请人",
                            Indexed: true,
                            EnforceUniqueValues: true
                          })
                          .then(s1 => {
                            ler2.list.fields
                              .addLookup("Dept", ler.data.Id, "Title")
                              .then(s2 => {
                                this.setState({ step5: 2 });
                                this.runStep1(ler.data.Id);
                              });
                          });
                      });
                  }
                });
            });
        } else {
          this.setState({ step5: 4 });

          this.runStep1(ler.data.Id);
        }
      })
      .catch(err => {
        let msgs: string[] = [];
        objectAssign(msgs, this.state.messages);
        msgs.push(err.message);
        this.setState({ step5: 3, messages: msgs });
      });
  }
  private runStep6(): void {
    this.setState({ step6: 1 });
    let factors: any[] = [
      { Title: "广东溢达纺织有限公司", abbreviation: "GET" },
      { Title: "桂林溢达纺织有限公司", abbreviation: "GLE" },
      { Title: "溢达企业有限公司", abbreviation: "EEL" },
      { Title: "新疆丰达农业有限公司", abbreviation: "WFC" },
      { Title: "新疆溢达纺织有限公司", abbreviation: "XJE" },
      { Title: "吐鲁番溢达纺织有限公司", abbreviation: "TPE" },
      { Title: "昌吉溢达纺织有限公司", abbreviation: "CJE" },
      { Title: "阿克苏溢达农业发展有限公司", abbreviation: "AEA" },
      { Title: "阿克苏溢达棉业有限公司", abbreviation: "AEC" },
      { Title: "新疆溢达农业科技有限公司", abbreviation: "XEA" },
      { Title: "常州溢达服装有限公司", abbreviation: "CEG" },
      { Title: "常州溢达针织品有限公司", abbreviation: "CEK" },
      { Title: "宁波溢达服装有限公司", abbreviation: "NBO" },
      { Title: "奉化溢达服装有限公司", abbreviation: "FEG" },
      { Title: "泰州溢达服装有限公司", abbreviation: "TEG" }
    ];
    this.appendSubjects(factors);
  }
  private appendSubjects(factors: any[]): void {
    let curFactor: any = factors.shift();
    sp.web.lists
      .getByTitle(WebConfig.subjectsListName)
      .items.add(curFactor)
      .then(f => {
        console.log(f);
        if (factors.length === 0) {
          this.setState({ step6: 2 });
          return;
        }
        this.appendSubjects(factors);
      })
      .catch(err => {
        let msgs: string[] = [];
        objectAssign(msgs, this.state.messages);
        msgs.push(err.message);
        this.setState({ step6: 3, messages: msgs });
      });
  }
  private runStep7(): void {
    this.setState({ step7: 1 });
    let contracttypes: any[] = [
      { Title: "成衣销售合同", ToPriceCenter: false },
      { Title: "其他采购合同", ToPriceCenter: true },
      { Title: "基建合同", ToPriceCenter: true },
      { Title: "工程合同", ToPriceCenter: true },
      { Title: "外发加工单次合同", ToPriceCenter: true },
      { Title: "运输合同", ToPriceCenter: true },
      { Title: "培训合同", ToPriceCenter: true },
      { Title: "招聘服务合同", ToPriceCenter: true },
      { Title: "合作开发协议", ToPriceCenter: true },
      { Title: "保密协议", ToPriceCenter: false },
      { Title: "棉纱销售合同", ToPriceCenter: false },
      { Title: "面料销售合同", ToPriceCenter: false },
      { Title: "辅料销售合同", ToPriceCenter: false },
      { Title: "棉纱采购总合同", ToPriceCenter: false },
      { Title: "棉纱采购单次合同", ToPriceCenter: false },
      { Title: "外发加工总合同", ToPriceCenter: false },
      { Title: "面料外发加工单次合同", ToPriceCenter: false },
      { Title: "辅料采购总合同", ToPriceCenter: false },
      { Title: "安全管理协议", ToPriceCenter: false },
      { Title: "检测服务合同", ToPriceCenter: true },
      { Title: "搬运服务承揽合同", ToPriceCenter: true },
      { Title: "垃圾清理服务合同", ToPriceCenter: true },
      { Title: "服务合同", ToPriceCenter: true },
      { Title: "影视制作合同", ToPriceCenter: true },
      { Title: "房屋租赁合同", ToPriceCenter: true },
      { Title: "棉花种植合同", ToPriceCenter: true },
      { Title: "棉花采购合同", ToPriceCenter: true },
      { Title: "棉花物流服务合同", ToPriceCenter: true },
      { Title: "挑修加工单次合同", ToPriceCenter: true },
      { Title: "设备租赁合同", ToPriceCenter: true },
      { Title: "设备采购合同", ToPriceCenter: true },
      { Title: "零配件采购总合同", ToPriceCenter: true },
      { Title: "燃煤采购合同", ToPriceCenter: true },
      { Title: "维修保养服务合同", ToPriceCenter: true },
      { Title: "隔热涂层施工合同", ToPriceCenter: true },
      { Title: "废弃物处理合同", ToPriceCenter: true },
      { Title: "污泥处理合同", ToPriceCenter: true },
      { Title: "仓库租赁合同", ToPriceCenter: true },
      { Title: "叉车租赁合同", ToPriceCenter: true },
      { Title: "库存衣服销售合同", ToPriceCenter: true },
      { Title: "库存布销售合同", ToPriceCenter: true },
      { Title: "二手设备销售合同", ToPriceCenter: true },
      { Title: "废品销售合同", ToPriceCenter: true },
      { Title: "寄售合同", ToPriceCenter: true },
      { Title: "试用协议", ToPriceCenter: true },
      { Title: "赠与合同", ToPriceCenter: true },
      { Title: "技术开发项目合作协议", ToPriceCenter: true },
      { Title: "补充协议", ToPriceCenter: true },
      { Title: "终止协议", ToPriceCenter: true }
    ];
    this.appendContypes(contracttypes);
  }
  private appendContypes(types: any[]): void {
    let curType: any = types.shift();
    sp.web.lists
      .getByTitle(WebConfig.contractTypeListName)
      .items.add(curType)
      .then(f => {
        console.log(f);
        if (types.length === 0) {
          this.setState({ step7: 2 });
          return;
        }
        this.appendContypes(types);
      })
      .catch(err => {
        let msgs: string[] = [];
        objectAssign(msgs, this.state.messages);
        msgs.push(err.message);
        this.setState({ step7: 3, messages: msgs });
      });
  }
  public componentDidMount(): void {
    sp.web.lists
      .getByTitle(WebConfig.AddrListName)
      .fields.getByTitle("description")
      .get()
      .then(r => {
        console.log(r);
      });
  }
}
