{"ColumnName":"ActionID","SqlType":"System.Guid","IsAutoIncrement":false,"IsCanNull":false,"MaxSize":36,"Scale":0,"IsPrimaryKey":true,"DefaultValue":[#GUID],"Description":"功能标识","TableName":"Sys_Action","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"ActionName","SqlType":"System.String","IsAutoIncrement":false,"IsCanNull":false,"MaxSize":100,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"","Description":"中文描述","TableName":"Sys_Action","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"ActionRefName","SqlType":"System.String","IsAutoIncrement":false,"IsCanNull":false,"MaxSize":100,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"","Description":"英文引用","TableName":"Sys_Action","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"IsEnabled","SqlType":"System.Boolean","IsAutoIncrement":false,"IsCanNull":true,"MaxSize":1,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"(1)","Description":"是否启用","TableName":"Sys_Action","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""}