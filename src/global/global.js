
const DATA= {
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
                                "status":"true",
                                "last_transition_time":"2022-12-5 14:34:09.418",
                                "message": " PreClear success",
                                "delay": 1009
                            },
                            {
                                "action": "Apply",
                                "status":"true",
                                "last_transition_time":"2022-12-5 14:34:09.418",
                                "message": " Apply success",
                                "delay": 1252
                            },
                            {
                                "action": "HealthCheck",
                                "status":"true",
                                "last_transition_time":"2022-12-5 14:34:09.418",
                                "message": " HealthCheck success",
                                "delay": 61396
                            },
                            {
                                "action": "PostClear",
                                "status":"false",
                                "last_transition_time":"2022-12-5 14:34:09.418",
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
        },
        {
            "uniqid": "sal200uw5a4dc54b2211093w1xds008a",

            "revisionNum": 1,
            "lastUpdateTime": "2022-11-09T14:34:43.451+08:00",
            "lastState": "Started",
            "lastVersion": "0.0.41",
            "lastAction": "create",
            "appId": "3520a6a966e74648ad34eb22bd706e79",
            "appName": "零壤OR",
            "revesionDelay": 63323,
            "stepInfo": {
                "create": [
                    {
                        "action": "PreClear",
                        "delay": 4944
                    },
                    {
                        "action": "Apply",
                        "delay": 127
                    },
                    {
                        "action": "HealthCheck",
                        "delay": 56597
                    },
                    {
                        "action": "PostClear",
                        "delay": 1531
                    }
                ]
            },
            "runtime": "production",
            "revisionInfo": [
                {
                    "uniqid": "sal200uw5a4dc54b2211093w1xds008a",
                    "image": "harbor.gw002.oneitfarm.com/library/sal200005a4dc54b2208105fgq1taeyr:0.0.142-release",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 63323,
                    "createTime": "2022-11-09T14:33:40.128+08:00",
                    "updateTime": "2022-11-09T14:34:43.451+08:00",
                    "stepInfo": {
                        "create": [
                            {
                                "action": "PreClear",
                                "delay": 4944
                            },
                            {
                                "action": "Apply",
                                "delay": 127
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 56597
                            },
                            {
                                "action": "PostClear",
                                "delay": 1531
                            }
                        ]
                    },
                    "version": "0.0.41",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "create"
                }
            ]
        },
        {
            "uniqid": "sal200uw5a4dc54b2211093w1xb90029",
            "revisionNum": 1,
            "lastUpdateTime": "2022-11-09T14:35:24.995+08:00",
            "lastState": "Started",
            "lastVersion": "0.0.41",
            "lastAction": "create",
            "appId": "3520a6a966e74648ad34eb22bd706e79",
            "appName": "零壤OR",
            "revesionDelay": 105289,
            "stepInfo": {
                "create": [
                    {
                        "action": "PreClear",
                        "delay": 4286
                    },
                    {
                        "action": "Apply",
                        "delay": 74
                    },
                    {
                        "action": "HealthCheck",
                        "delay": 100047
                    },
                    {
                        "action": "PostClear",
                        "delay": 752
                    }
                ]
            },
            "runtime": "production",
            "revisionInfo": [
                {
                    "uniqid": "sal200uw5a4dc54b2211093w1xb90029",
                    "image": "harbor.gw002.oneitfarm.com/library/sal200005a4dc54b2211084ckddt9ab3:0.0.12",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 105289,
                    "createTime": "2022-11-09T14:33:39.706+08:00",
                    "updateTime": "2022-11-09T14:35:24.995+08:00",
                    "stepInfo": {
                        "create": [
                            {
                                "action": "PreClear",
                                "delay": 4286
                            },
                            {
                                "action": "Apply",
                                "delay": 74
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 100047
                            },
                            {
                                "action": "PostClear",
                                "delay": 752
                            }
                        ]
                    },
                    "version": "0.0.41",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "create"
                }
            ]
        },
        {
            "uniqid": "sal200uw5a4dc54b2206155gvxvl00gd",
            "revisionNum": 14,
            "lastUpdateTime": "2022-11-08T15:18:03.681+08:00",
            "lastState": "Started",
            "lastVersion": "0.0.0",
            "lastAction": "update",
            "appId": "3520a6a966e74648ad34eb22bd706e79",
            "appName": "零壤OR",
            "revesionDelay": 38723,
            "stepInfo": {
                "update": [
                    {
                        "action": "PreClear",
                        "delay": 2564
                    },
                    {
                        "action": "Apply",
                        "delay": 919
                    },
                    {
                        "action": "HealthCheck",
                        "delay": 34048
                    },
                    {
                        "action": "PostClear",
                        "delay": 1043
                    }
                ]
            },
            "runtime": "production",
            "revisionInfo": [
                {
                    "uniqid": "sal200uw5a4dc54b2206155gvxvl00gd",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b2211154av1ektur4:0.0.7-iFlytek",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 68149,
                    "createTime": "2022-11-15T16:49:59.463+08:00",
                    "updateTime": "2022-11-15T16:51:07.612+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 3230
                            },
                            {
                                "action": "Apply",
                                "delay": 88
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 63926
                            },
                            {
                                "action": "PostClear",
                                "delay": 763
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2206155gvxvl00gd",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b2211143m7qs1tucw:0.0.5-flytek",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 103605,
                    "createTime": "2022-11-15T16:19:44.638+08:00",
                    "updateTime": "2022-11-15T16:21:28.243+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 5328
                            },
                            {
                                "action": "Apply",
                                "delay": 3290
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 93979
                            },
                            {
                                "action": "PostClear",
                                "delay": 842
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2206155gvxvl00gd",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b2211143m7qs1tucw:0.0.5-flytek",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 64142,
                    "createTime": "2022-11-14T14:12:44.651+08:00",
                    "updateTime": "2022-11-14T14:13:48.793+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 3226
                            },
                            {
                                "action": "Apply",
                                "delay": 83
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 59897
                            },
                            {
                                "action": "PostClear",
                                "delay": 784
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2206155gvxvl00gd",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b2211115ygobhq4bj:0.0.3-flytek",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 59073,
                    "createTime": "2022-11-11T18:08:21.227+08:00",
                    "updateTime": "2022-11-11T18:09:20.300+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 1444
                            },
                            {
                                "action": "Apply",
                                "delay": 217
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 56492
                            },
                            {
                                "action": "PostClear",
                                "delay": 776
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2206155gvxvl00gd",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b221111520qfjtuuz:0.0.2-flytek",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 11827,
                    "createTime": "2022-11-11T17:02:16.015+08:00",
                    "updateTime": "2022-11-11T17:02:27.842+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 3228
                            },
                            {
                                "action": "Apply",
                                "delay": 86
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 5432
                            },
                            {
                                "action": "PostClear",
                                "delay": 2931
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2206155gvxvl00gd",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b221111520qfjtuuz:0.0.2-flytek",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 8227,
                    "createTime": "2022-11-11T16:58:50.798+08:00",
                    "updateTime": "2022-11-11T16:58:59.025+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 1282
                            },
                            {
                                "action": "Apply",
                                "delay": 71
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 5312
                            },
                            {
                                "action": "PostClear",
                                "delay": 1417
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2206155gvxvl00gd",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b221111520qfjtuuz:0.0.2-flytek",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 7014,
                    "createTime": "2022-11-11T16:55:58.973+08:00",
                    "updateTime": "2022-11-11T16:56:05.987+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 1369
                            },
                            {
                                "action": "Apply",
                                "delay": 81
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 4622
                            },
                            {
                                "action": "PostClear",
                                "delay": 808
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2206155gvxvl00gd",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b221111520qfjtuuz:0.0.2-flytek",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 55381,
                    "createTime": "2022-11-11T16:43:39.670+08:00",
                    "updateTime": "2022-11-11T16:44:35.051+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 1450
                            },
                            {
                                "action": "Apply",
                                "delay": 78
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 52959
                            },
                            {
                                "action": "PostClear",
                                "delay": 748
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2206155gvxvl00gd",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b2211114qduq6tucu:0.0.1-flytek",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 8694,
                    "createTime": "2022-11-11T16:35:38.013+08:00",
                    "updateTime": "2022-11-11T16:35:46.707+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 1188
                            },
                            {
                                "action": "Apply",
                                "delay": 93
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 5967
                            },
                            {
                                "action": "PostClear",
                                "delay": 1252
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2206155gvxvl00gd",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b2211114qduq6tucu:0.0.1-flytek",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 19158,
                    "createTime": "2022-11-11T16:17:16.715+08:00",
                    "updateTime": "2022-11-11T16:17:35.873+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 5552
                            },
                            {
                                "action": "Apply",
                                "delay": 8480
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 4174
                            },
                            {
                                "action": "PostClear",
                                "delay": 818
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2206155gvxvl00gd",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b2211114qduq6tucu:0.0.1-flytek",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 6899,
                    "createTime": "2022-11-11T16:14:42.927+08:00",
                    "updateTime": "2022-11-11T16:14:49.826+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 1872
                            },
                            {
                                "action": "Apply",
                                "delay": 54
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 3789
                            },
                            {
                                "action": "PostClear",
                                "delay": 1044
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2206155gvxvl00gd",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b2211114qduq6tucu:0.0.1-flytek",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 8288,
                    "createTime": "2022-11-11T16:12:14.203+08:00",
                    "updateTime": "2022-11-11T16:12:22.491+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 2404
                            },
                            {
                                "action": "Apply",
                                "delay": 80
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 4856
                            },
                            {
                                "action": "PostClear",
                                "delay": 782
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2206155gvxvl00gd",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b2211114qduq6tucu:0.0.1-flytek",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 65055,
                    "createTime": "2022-11-11T16:04:40.521+08:00",
                    "updateTime": "2022-11-11T16:05:45.576+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 3230
                            },
                            {
                                "action": "Apply",
                                "delay": 89
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 60794
                            },
                            {
                                "action": "PostClear",
                                "delay": 817
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2206155gvxvl00gd",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b2204153snagsaep2:0.0.88-release",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 56619,
                    "createTime": "2022-11-08T15:17:07.062+08:00",
                    "updateTime": "2022-11-08T15:18:03.681+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 1096
                            },
                            {
                                "action": "Apply",
                                "delay": 85
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 54475
                            },
                            {
                                "action": "PostClear",
                                "delay": 825
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                }
            ]
        },
        {
            "uniqid": "sal200uw5a4dc54b2204153s4fa00062",
            "revisionNum": 14,
            "lastUpdateTime": "2022-11-08T15:19:07.399+08:00",
            "lastState": "Started",
            "lastVersion": "0.0.0",
            "lastAction": "update",
            "appId": "3520a6a966e74648ad34eb22bd706e79",
            "appName": "零壤OR",
            "revesionDelay": 38259,
            "stepInfo": {
                "update": [
                    {
                        "action": "Apply",
                        "delay": 291
                    },
                    {
                        "action": "HealthCheck",
                        "delay": 32804
                    },
                    {
                        "action": "PostClear",
                        "delay": 1320
                    },
                    {
                        "action": "PreClear",
                        "delay": 3452
                    }
                ]
            },
            "runtime": "production",
            "revisionInfo": [
                {
                    "uniqid": "sal200uw5a4dc54b2204153s4fa00062",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b2211114vuzir9alz:0.0.13",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 10946,
                    "createTime": "2022-11-15T16:49:59.838+08:00",
                    "updateTime": "2022-11-15T16:50:10.784+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 3899
                            },
                            {
                                "action": "Apply",
                                "delay": 66
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 6024
                            },
                            {
                                "action": "PostClear",
                                "delay": 784
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2204153s4fa00062",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b2211114vuzir9alz:0.0.13",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 105913,
                    "createTime": "2022-11-15T16:19:45.286+08:00",
                    "updateTime": "2022-11-15T16:21:31.199+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 6858
                            },
                            {
                                "action": "Apply",
                                "delay": 1166
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 96916
                            },
                            {
                                "action": "PostClear",
                                "delay": 811
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2204153s4fa00062",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b2211114vuzir9alz:0.0.13",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 10549,
                    "createTime": "2022-11-14T14:12:45.795+08:00",
                    "updateTime": "2022-11-14T14:12:56.344+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 3050
                            },
                            {
                                "action": "Apply",
                                "delay": 64
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 5081
                            },
                            {
                                "action": "PostClear",
                                "delay": 2185
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2204153s4fa00062",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b2211114vuzir9alz:0.0.13",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 9427,
                    "createTime": "2022-11-11T18:08:21.604+08:00",
                    "updateTime": "2022-11-11T18:08:31.031+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 2881
                            },
                            {
                                "action": "Apply",
                                "delay": 62
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 5194
                            },
                            {
                                "action": "PostClear",
                                "delay": 1144
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2204153s4fa00062",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b2211114vuzir9alz:0.0.13",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 12428,
                    "createTime": "2022-11-11T17:02:16.422+08:00",
                    "updateTime": "2022-11-11T17:02:28.850+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 3660
                            },
                            {
                                "action": "Apply",
                                "delay": 63
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 7682
                            },
                            {
                                "action": "PostClear",
                                "delay": 715
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2204153s4fa00062",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b2211114vuzir9alz:0.0.13",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 11260,
                    "createTime": "2022-11-11T16:58:51.221+08:00",
                    "updateTime": "2022-11-11T16:59:02.481+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 2681
                            },
                            {
                                "action": "Apply",
                                "delay": 73
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 6066
                            },
                            {
                                "action": "PostClear",
                                "delay": 2270
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2204153s4fa00062",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b2211114vuzir9alz:0.0.13",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 8944,
                    "createTime": "2022-11-11T16:55:59.640+08:00",
                    "updateTime": "2022-11-11T16:56:08.584+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 2446
                            },
                            {
                                "action": "Apply",
                                "delay": 61
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 5488
                            },
                            {
                                "action": "PostClear",
                                "delay": 801
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2204153s4fa00062",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b2211114vuzir9alz:0.0.13",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 6656,
                    "createTime": "2022-11-11T16:43:40.079+08:00",
                    "updateTime": "2022-11-11T16:43:46.735+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 962
                            },
                            {
                                "action": "Apply",
                                "delay": 76
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 3970
                            },
                            {
                                "action": "PostClear",
                                "delay": 715
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2204153s4fa00062",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b2211114vuzir9alz:0.0.13",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 9957,
                    "createTime": "2022-11-11T16:35:38.913+08:00",
                    "updateTime": "2022-11-11T16:35:48.870+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 1173
                            },
                            {
                                "action": "Apply",
                                "delay": 54
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 7491
                            },
                            {
                                "action": "PostClear",
                                "delay": 737
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2204153s4fa00062",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b2211114vuzir9alz:0.0.13",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 7642,
                    "createTime": "2022-11-11T16:17:38.222+08:00",
                    "updateTime": "2022-11-11T16:17:45.864+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 2104
                            },
                            {
                                "action": "Apply",
                                "delay": 60
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 3601
                            },
                            {
                                "action": "PostClear",
                                "delay": 1735
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2204153s4fa00062",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b2211114vuzir9alz:0.0.13",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 106804,
                    "createTime": "2022-11-11T16:14:43.365+08:00",
                    "updateTime": "2022-11-11T16:16:30.169+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 3829
                            },
                            {
                                "action": "Apply",
                                "delay": 70
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 98148
                            },
                            {
                                "action": "PostClear",
                                "delay": 3357
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2204153s4fa00062",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b2211084ckddt9ab3:0.0.12",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 102838,
                    "createTime": "2022-11-11T16:12:14.588+08:00",
                    "updateTime": "2022-11-11T16:13:57.426+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 2296
                            },
                            {
                                "action": "Apply",
                                "delay": 46
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 98828
                            },
                            {
                                "action": "PostClear",
                                "delay": 714
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2204153s4fa00062",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b22042551wafp9ax5:0.0.9",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 12250,
                    "createTime": "2022-11-11T16:04:40.914+08:00",
                    "updateTime": "2022-11-11T16:04:53.164+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 4642
                            },
                            {
                                "action": "Apply",
                                "delay": 64
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 6591
                            },
                            {
                                "action": "PostClear",
                                "delay": 824
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                },
                {
                    "uniqid": "sal200uw5a4dc54b2204153s4fa00062",
                    "image": "harbor.oneitfarm.com/itfarm-test/sal200005a4dc54b22042551wafp9ax5:0.0.9",
                    "state": "Started",
                    "replicas": 1,
                    "retryNum": 1,
                    "delay": 120013,
                    "createTime": "2022-11-08T15:17:07.386+08:00",
                    "updateTime": "2022-11-08T15:19:07.399+08:00",
                    "stepInfo": {
                        "update": [
                            {
                                "action": "PreClear",
                                "delay": 7855
                            },
                            {
                                "action": "Apply",
                                "delay": 2156
                            },
                            {
                                "action": "HealthCheck",
                                "delay": 108176
                            },
                            {
                                "action": "PostClear",
                                "delay": 1693
                            }
                        ]
                    },
                    "version": "0.0.0",
                    "appId": "3520a6a966e74648ad34eb22bd706e79",
                    "appName": "零壤OR",
                    "clusterUniqid": "aliyun-sh-prod",
                    "namespaceUniqid": "namespace-deploy",
                    "runtime": "production",
                    "typeString": "update"
                }
            ]
        }
    ]
}

export default {
    DATA,
}