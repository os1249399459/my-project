# my-project

## install nodejs

参考 [Node.js Binary Distributions](https://github.com/nodesource/distributions/blob/master/README.md)

## install yarn

```sh
sudo apt-get update && sudo apt-get install yarn
```

## install @vue/cli

```sh
yarn global add @vue/cli
```

## create my-project

```sh
vue create my-project
```

## 添加 ElementUI

```
cd my-project && yarn add element-ui
```


1. 付款成功后先盖章接口
2. 盖章接口成功后调用查询验签接口
3. 验签成功后调用contractReceive接口将合同改成待确认
4. contractReceive成功后/crm/api/sales/crm/financeContractReceiveOrder/pay bizCode就是salesCode