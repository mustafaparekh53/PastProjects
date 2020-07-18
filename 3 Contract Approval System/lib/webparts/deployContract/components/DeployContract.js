var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import styles from "./DeployContract.module.scss";
import { sp, FieldUserSelectionMode, DateTimeFieldFormatType, CalendarType } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import { WebConfig } from "../../ComComponents/webconfig";
import { autobind } from "office-ui-fabric-react/lib/Utilities";
import * as objectAssign from "object-assign";
var DeployContract = (function (_super) {
    __extends(DeployContract, _super);
    function DeployContract(props) {
        var _this = _super.call(this, props) || this;
        _this.statusText = [
            "(待执行)",
            "(正在执行)",
            "(完成)",
            "(有错误)",
            "(列表已存在，跳过)"
        ];
        _this.state = {
            step1: 0,
            step2: 0,
            step3: 0,
            step4: 0,
            step5: 0,
            step6: 0,
            step7: 0,
            messages: []
        };
        return _this;
    }
    DeployContract.prototype.render = function () {
        return (React.createElement("div", { className: styles.deployContract },
            React.createElement("script", { src: "http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js" }),
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column },
                        React.createElement("div", null,
                            React.createElement("button", { type: "button", id: "btnStart", onClick: this.startDeploy }, "\u5F00\u59CB\u90E8\u7F72")),
                        React.createElement("div", { id: "dccontents" },
                            React.createElement("div", { id: "dcstep_5", className: "dcstep" },
                                "1.\u521B\u5EFA\u5217\u8868",
                                WebConfig.StaffDeptListName,
                                React.createElement("span", { className: "StepStus", id: "stepstatus_5" }, this.statusText[this.state.step5])),
                            React.createElement("div", { id: "dcstep_1", className: "dcstep" },
                                "2.\u521B\u5EFA\u5217\u8868",
                                WebConfig.contractTypeListName,
                                React.createElement("span", { className: "StepStus", id: "stepstatus_1" }, this.statusText[this.state.step1])),
                            React.createElement("div", { id: "dcstep_2", className: "dcstep" },
                                "3.\u521B\u5EFA\u5217\u8868",
                                WebConfig.subjectsListName,
                                React.createElement("span", { className: "StepStus", id: "stepstatus_2" }, this.statusText[this.state.step2])),
                            React.createElement("div", { id: "dcstep_3", className: "dcstep" },
                                "4.\u521B\u5EFA\u5217\u8868",
                                WebConfig.requestedItemsListName,
                                React.createElement("span", { className: "StepStus", id: "stepstatus_3" }, this.statusText[this.state.step3])),
                            React.createElement("div", { id: "dcstep_4", className: "dcstep" },
                                "5.\u521B\u5EFA\u5217\u8868",
                                WebConfig.AddrListName,
                                React.createElement("span", { className: "StepStus", id: "stepstatus_4" }, this.statusText[this.state.step4])),
                            React.createElement("div", { id: "dcstep_6", className: "dcstep" },
                                "6.\u6DFB\u52A0\u5217\u8868",
                                WebConfig.subjectsListName,
                                "\u6570\u636E",
                                React.createElement("span", { className: "StepStus", id: "stepstatus_6" }, this.statusText[this.state.step6])),
                            React.createElement("div", { id: "dcstep_7", className: "dcstep" },
                                "7.\u6DFB\u52A0\u5217\u8868",
                                WebConfig.contractTypeListName,
                                "\u6570\u636E",
                                React.createElement("span", { className: "StepStus", id: "stepstatus_7" }, this.statusText[this.state.step7]))))),
                React.createElement("div", { className: styles.row },
                    React.createElement("div", null,
                        React.createElement("ol", null, this.state.messages.map(function (msg) {
                            return "<li>" + msg + "</li>";
                        })))))));
    };
    DeployContract.prototype.startDeploy = function () {
        this.runStep5();
        this.runStep2();
    };
    DeployContract.prototype.runStep1 = function (DeptsGuid) {
        var _this = this;
        this.setState({ step1: 1 });
        sp.web.lists
            .ensure(WebConfig.contractTypeListName, "合同类别设置")
            .then(function (ler) {
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
                    .update({
                    Title: "Title",
                    MaxLength: 50,
                    Indexed: true,
                    EnforceUniqueValues: true
                }, "SP.FieldText") // .update({Title:"Title",})
                    .then(function (filedresult) {
                    console.log(filedresult);
                    ler.list.fields
                        .addUser("pricecenterId", FieldUserSelectionMode.PeopleOnly, {
                        Title: "pricecenter"
                    })
                        .then(function (ft2) {
                        console.log(ft2);
                        ler.list.fields
                            .addUser("laywerId", FieldUserSelectionMode.PeopleOnly, {
                            Title: "laywer"
                        })
                            .then(function (ft1) {
                            console.log(ft1);
                            ler.list.fields
                                .addUser("otherpricecentersId", FieldUserSelectionMode.PeopleOnly, {
                                Title: "otherpricecenters",
                                AllowMultipleValues: true
                            })
                                .then(function (ft0) {
                                console.log(ft0);
                                ler.list.fields
                                    .addUser("otherlawyersId", FieldUserSelectionMode.PeopleOnly, {
                                    Title: "otherlawyers",
                                    AllowMultipleValues: true
                                })
                                    .then(function (frst0) {
                                    console.log(frst0);
                                    ler.list.fields
                                        .addBoolean("ToPriceCenter", {
                                        Description: "送审价吗"
                                    })
                                        .then(function (frst) {
                                        console.log(frst);
                                        ler.list.fields
                                            .getByTitle("ToPriceCenter")
                                            .update({ DefaultValue: "No" }, "SP.FieldChoice")
                                            .then(function (fresult) {
                                            console.log(fresult);
                                        });
                                        _this.setState({ step1: 2 });
                                        _this.runStep3(ler.data.Id, DeptsGuid);
                                    });
                                });
                            });
                        });
                    });
                })
                    .catch(function (err) {
                    var msgs = [];
                    objectAssign(msgs, _this.state.messages);
                    msgs.push(err.message);
                    _this.setState({ step1: 3, messages: msgs });
                });
                // ler.list.fields.getByTitle("ToPriceCenter").update()
            }
            else {
                console.log(WebConfig.contractTypeListName + " has exists");
                _this.setState({ step1: 4 });
                sp.web.lists
                    .getByTitle(WebConfig.contractTypeListName)
                    .get()
                    .then(function (list) {
                    console.log(list);
                    _this.runStep3(list.Id, DeptsGuid);
                });
                /*ler.list.fields
                  .getByTitle("otherpricecenters")
                  .get()
                  .then(filedresult => {
                    console.log(filedresult);
                  });*/
            }
        });
    };
    DeployContract.prototype.runStep2 = function () {
        var _this = this;
        this.setState({ step2: 1 });
        sp.web.lists
            .ensure(WebConfig.subjectsListName, "合同主体设置")
            .then(function (ler) {
            if (ler.created) {
                ler.list.fields
                    .getByInternalNameOrTitle("Title")
                    .update({
                    Title: "Title",
                    MaxLength: 50,
                    Indexed: true,
                    EnforceUniqueValues: true
                }, "SP.FieldText")
                    .then(function (filedresult) {
                    ler.list.fields.addText("abbreviation", 10).then(function (fresult) {
                        _this.setState({ step2: 2 });
                        _this.runStep6();
                    });
                });
            }
            else {
                _this.setState({ step2: 4 });
                _this.runStep6();
            }
        });
    };
    DeployContract.prototype.runStep3 = function (ContractTypeGuid, DeptGuid) {
        var _this = this;
        this.setState({ step3: 1 });
        sp.web.lists
            .ensure(WebConfig.requestedItemsListName, "合同申请列表")
            .then(function (ler) {
            if (ler.created) {
                ler.list.fields
                    .getByInternalNameOrTitle("Title")
                    .update({
                    Title: "Title",
                    Description: "合同名称",
                    MaxLength: 100
                }, "SP.FieldText")
                    .then(function (filedresult) {
                    ler.list.fields
                        .addText("ContractNo", 64, {
                        Description: "合同编号",
                        Indexed: true,
                        EnforceUniqueValues: true
                    })
                        .then(function (fresult) {
                        console.log(ContractTypeGuid);
                        ler.list.fields
                            .addLookup("ContractType", ContractTypeGuid, "Title")
                            .then(function (f0) {
                            ler.list.fields
                                .addText("ContractObject", 100)
                                .then(function (fx) {
                                ler.list.fields
                                    .addNumber("Money", 0, 999999999, {
                                    Description: "金额"
                                })
                                    .then(function (f1) {
                                    ler.list.fields
                                        .addChoice("Currency", ["RMB", "USD", "EUR", "N/A"], undefined, true, { Required: true })
                                        .then(function (f6) {
                                        ler.list.fields
                                            .addText("PayWay", 50, {
                                            Required: true,
                                            Description: "支付方式"
                                        })
                                            .then(function (f7) {
                                            ler.list.fields
                                                .addBoolean("NeedApproval", {
                                                Description: "是否送审价中心审批",
                                                Required: true
                                            })
                                                .then(function (f8) {
                                                ler.list.fields
                                                    .addText("remarks", 255, {
                                                    Description: "备注信息"
                                                })
                                                    .then(function (f9) {
                                                    ler.list.fields
                                                        .addUser("lawyer", FieldUserSelectionMode.PeopleOnly, { Title: "lawyer" })
                                                        .then(function (f10) {
                                                        ler.list.fields
                                                            .addUser("pricingcenter", FieldUserSelectionMode.PeopleOnly)
                                                            .then(function (f11) {
                                                            ler.list.fields
                                                                .addText("requestNo", 20, {
                                                                EnforceUniqueValues: true,
                                                                Description: "编号",
                                                                Indexed: true
                                                            })
                                                                .then(function (f12) {
                                                                ler.list.fields
                                                                    .addText("mainbody", 50, {
                                                                    Description: "合同主体"
                                                                })
                                                                    .then(function (f5) {
                                                                    ler.list.fields
                                                                        .addText("RelativeParty", 50, {
                                                                        Description: "合同相对方"
                                                                    })
                                                                        .then(function (f4) {
                                                                        ler.list.fields
                                                                            .addText("FactoryDept", 50, {
                                                                            Description: "厂部"
                                                                        })
                                                                            .then(function (f3) {
                                                                            ler.list.fields
                                                                                .addText("status", 10, {
                                                                                Description: "状态"
                                                                            })
                                                                                .then(function (f2) {
                                                                                ler.list.fields
                                                                                    .addDateTime("signingDate", DateTimeFieldFormatType.DateOnly, CalendarType.ChineseLunar, undefined, {
                                                                                    Description: "合同签订日期"
                                                                                })
                                                                                    .then(function (f1x) {
                                                                                    ler.list.fields
                                                                                        .addUser("representative", FieldUserSelectionMode.PeopleOnly, {
                                                                                        Description: "合同签订人"
                                                                                    })
                                                                                        .then(function (f20) {
                                                                                        ler.list.fields
                                                                                            .addLookup("StaffDept", DeptGuid, "Title")
                                                                                            .then(function (f21) {
                                                                                            ler.list.fields
                                                                                                .addText("applog", 200, {})
                                                                                                .then(function (f22) {
                                                                                                console.log("created applog");
                                                                                                _this.setState({
                                                                                                    step3: 2
                                                                                                });
                                                                                                _this.runStep4(ler
                                                                                                    .data
                                                                                                    .Id);
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
                                        });
                                    });
                                });
                            });
                        });
                    });
                })
                    .catch(function (err) {
                    var msgs = [];
                    objectAssign(msgs, _this.state.messages);
                    msgs.push(err.message);
                    _this.setState({ step3: 3, messages: msgs });
                });
            }
            else {
                _this.setState({ step3: 4 });
                _this.runStep4(ler.data.Id);
            }
        });
    };
    DeployContract.prototype.runStep4 = function (ContractItemGuid) {
        var _this = this;
        this.setState({ step4: 1 });
        sp.web.lists
            .ensure(WebConfig.AddrListName, "审批结果列表")
            .then(function (ler) {
            if (ler.created) {
                ler.list.fields
                    .getByInternalNameOrTitle("Title")
                    .update({
                    Title: "title",
                    MaxLength: 10
                }, "SP.FieldText")
                    .then(function (filedresult) {
                    ler.list.fields
                        .addBoolean("result", { Description: "是否通过" })
                        .then(function (fresult) {
                        ler.list.fields
                            .addBoolean("submited", { Description: "是否已提交" })
                            .then(function (fsubmited) {
                            ler.list.fields
                                .addMultilineText("description", 10, true, true, true, true, {
                                Description: "审批意见"
                                // SchemaXml:
                                // tslint:disable-next-line:max-line-length
                                //   '<Field DisplayName="description" Type="Note" Required="true" ID="{87e93b22-d3d1-4614-8716-3b529e38912e}" SourceID="{5727f1c4-148f-43c1-81b0-a8189913998b}" StaticName="description" Name="description" ColName="ntext2" RowOrdinal="0" AllowHyperlink="TRUE" AppendOnly="true" NumLines="10" RestrictedMode="TRUE" RichText="TRUE" Description="" Version="2" CustomFormatter="" EnforceUniqueValues="true" Indexed="true" RichTextMode="FullHtml" IsolateStyles="TRUE" />'
                            })
                                .then(function (f0) {
                                console.log(f0);
                                var schxml = f0.data.SchemaXml;
                                schxml = schxml.replace("Version=\"1\"", "Version=\"2\"");
                                schxml = schxml.replace("/>", "CustomFormatter=\"\"  EnforceUniqueValues=\"false\" Indexed=\"false\" RichTextMode=\"FullHtml\" IsolateStyles=\"TRUE\" />");
                                f0.field.update({ SchemaXml: schxml }).then(function (r) {
                                    console.log(r);
                                    ler.list.fields
                                        .addLookup("itemid", ContractItemGuid, "Title", {
                                        Required: true
                                    })
                                        .then(function (f1) {
                                        ler.list.fields
                                            .addText("sendtype", 20, {
                                            Description: "寄取方式"
                                        })
                                            .then(function (f2) {
                                            _this.setState({ step4: 2 });
                                            _this.runStep7();
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
                // this.runStep5();
            }
            else {
                _this.setState({ step4: 4 });
                // this.runStep5();
            }
        });
    };
    DeployContract.prototype.runStep5 = function () {
        var _this = this;
        this.setState({ step5: 1 });
        sp.web.lists
            .ensure(WebConfig.DeptsListName, "部门配置表")
            .then(function (ler) {
            if (ler.created) {
                ler.list.fields
                    .getByInternalNameOrTitle("Title")
                    .update({
                    Title: "title",
                    MaxLength: 20,
                    Indexed: true,
                    EnforceUniqueValues: true
                }, "SP.FieldText")
                    .then(function (s0) {
                    ler.list.items.add({ Title: "采购部" }).then(function (its) {
                        console.log("已添加采购部");
                    });
                    sp.web.lists
                        .ensure(WebConfig.StaffDeptListName, "申请人部门配置表")
                        .then(function (ler2) {
                        if (ler2.created) {
                            ler2.list.fields
                                .getByInternalNameOrTitle("Title")
                                .update({
                                Title: "title",
                                Required: true,
                                Hidden: true
                            }, "SP.FieldText")
                                .then(function (sd0) {
                                ler2.list.fields
                                    .addUser("Staff", FieldUserSelectionMode.PeopleOnly, {
                                    Description: "申请人",
                                    Indexed: true,
                                    EnforceUniqueValues: true
                                })
                                    .then(function (s1) {
                                    ler2.list.fields
                                        .addLookup("Dept", ler.data.Id, "Title")
                                        .then(function (s2) {
                                        _this.setState({ step5: 2 });
                                        _this.runStep1(ler.data.Id);
                                    });
                                });
                            });
                        }
                    });
                });
            }
            else {
                _this.setState({ step5: 4 });
                _this.runStep1(ler.data.Id);
            }
        })
            .catch(function (err) {
            var msgs = [];
            objectAssign(msgs, _this.state.messages);
            msgs.push(err.message);
            _this.setState({ step5: 3, messages: msgs });
        });
    };
    DeployContract.prototype.runStep6 = function () {
        this.setState({ step6: 1 });
        var factors = [
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
    };
    DeployContract.prototype.appendSubjects = function (factors) {
        var _this = this;
        var curFactor = factors.shift();
        sp.web.lists
            .getByTitle(WebConfig.subjectsListName)
            .items.add(curFactor)
            .then(function (f) {
            console.log(f);
            if (factors.length === 0) {
                _this.setState({ step6: 2 });
                return;
            }
            _this.appendSubjects(factors);
        })
            .catch(function (err) {
            var msgs = [];
            objectAssign(msgs, _this.state.messages);
            msgs.push(err.message);
            _this.setState({ step6: 3, messages: msgs });
        });
    };
    DeployContract.prototype.runStep7 = function () {
        this.setState({ step7: 1 });
        var contracttypes = [
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
    };
    DeployContract.prototype.appendContypes = function (types) {
        var _this = this;
        var curType = types.shift();
        sp.web.lists
            .getByTitle(WebConfig.contractTypeListName)
            .items.add(curType)
            .then(function (f) {
            console.log(f);
            if (types.length === 0) {
                _this.setState({ step7: 2 });
                return;
            }
            _this.appendContypes(types);
        })
            .catch(function (err) {
            var msgs = [];
            objectAssign(msgs, _this.state.messages);
            msgs.push(err.message);
            _this.setState({ step7: 3, messages: msgs });
        });
    };
    DeployContract.prototype.componentDidMount = function () {
        sp.web.lists
            .getByTitle(WebConfig.AddrListName)
            .fields.getByTitle("description")
            .get()
            .then(function (r) {
            console.log(r);
        });
    };
    __decorate([
        autobind
    ], DeployContract.prototype, "startDeploy", null);
    return DeployContract;
}(React.Component));
export default DeployContract;

//# sourceMappingURL=DeployContract.js.map
