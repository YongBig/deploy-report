const DATA = {
    "insNum": 5,
    "proInsNum": 5,
    "testInsNum": 0,
    "failedApplyNum": 0,
    "applyNum": 3,
    "updateNum": 28,
    "failedUpdateNum": 0,
    "revisionNum": 31,
    "appId": "3520a6a966e74648ad34eb22bd706e79",
    "appName": "零壤OR",
    "ins": [
        {
            "uniqid": "sal200uw5a4dc54b2211094askkm00fp",
            "revisionNum": 1,
            "lastUpdateTime": "2022-11-09T15:15:23.671+08:00",
            "lastState": "Started",
            "lastVersion": "0.0.0",
            "lastAction": "create",
            "appId": "3520a6a966e74648ad34eb22bd706e79",
            "appName": "零壤OR",
            "revesionDelay": 63799,
            "stepInfo": {
                "create": [
                    {
                        "action": "PreClear",
                        "delay": 1009
                    },
                    {
                        "action": "Apply",
                        "delay": 1252
                    },
                    {
                        "action": "HealthCheck",
                        "delay": 61396
                    },
                    {
                        "action": "PostClear",
                        "delay": 3
                    }
                ]
            },
            "runtime": "production",
            "revisionInfo": [
                {
                    "uniqid": "sal200uw5a4dc54b2211094askkm00fp",
                    "image": "harbor.oneitfarm.com/zhirenyun/lnmp:php-7.2",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 63799,
                    "createTime": "2022-11-09T15:14:19.872+08:00",
                    "updateTime": "2022-11-09T15:15:23.671+08:00",
                    "stepInfo": {
                        "create": [
                            {
                                "action": "PreClear",
                                "status": "true",
                                "last_transition_time": "2022-12-5 14:34:09.418",
                                "message": " PreClear success",
                                "delay": 1009
                            },
                            {
                                "action": "Apply",
                                "status": "true",
                                "last_transition_time": "2022-12-5 14:34:09.418",
                                "message": " Apply success",
                                "delay": 1252
                            },
                            {
                                "action": "HealthCheck",
                                "status": "true",
                                "last_transition_time": "2022-12-5 14:34:09.418",
                                "message": " HealthCheck success",
                                "delay": 61396
                            },
                            {
                                "action": "PostClear",
                                "status": "false",
                                "last_transition_time": "2022-12-5 14:34:09.418",
                                "message": " HealthCheck failed",
                                "delay": 3
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "action": "create"
                }
            ]
        }
    ]
}

export default {
    DATA,
}
