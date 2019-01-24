<!-- sectionTitle: apollo-link-state -->

## apollo-link-state

<br />

https://github.com/apollographql/apollo-link-state

---

## apollo-link-state

<br />

ローカルデータを Apollo Client で管理し、  
GraphQL query/mutation を使ってアクセスします。

<br />

🎉 apollo-link-state は Apollo Client へ v2.5 から統合されます([#4338](https://github.com/apollographql/apollo-client/pull/4338)) 🎉

<br />

```javascript
const GET_CURRENT_SUM = gql`
  query {
    # @clientをつけることによりローカルに向きます
    current @client {
      sum
    }
  }
`;
```

<!-- note
stateがCoreに入ることにより、本格的に状態管理に注力していることがわかります。
@clientというディレクティブを指定することにより、ローカルに向きます。
-->
