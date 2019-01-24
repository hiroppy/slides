<!-- sectionTitle: redux vs apollo-client -->

## redux vs apollo-client

<!-- note
ここの表現って難しくて、apollo-client側にremote dataを管理させ、redux側にlocal dataを管理する実装もあります。
-->

---

## 👍 fetch のフラグ管理が楽

<br />

client と view が密になっているため、ローディング中やエラーがわかりやすい

<br />

```javascript
export const Button: React.FC = () => (
  <AddStarMutation mutation={ADD_STAR} variables={{ id: data.repository.id }}>
    {(addStar, { loading, error }) => {
      if (error) return `Error! ${error.message}`;
      return (
        <button onClick={() => addStar()} disabled={loading /* 送信中のときはdisabled */}>
          {loading ? '💌' : '🌟' /* 送信中はアイコンを変更 */}
        </button>
      );
    }}
  </AddStarMutation>
);
```

---

## 👍 部分更新が簡単

<br />

Container Component と同じ振る舞いをするのが簡単

<br />

<img src="../images/example-hightlight-updates.gif" />

---

## 👍 何が必要かわかりやすい

リモートとローカルを同一クエリで表現できる

<!-- prettier-ignore -->
```javascript
const GET_AUTHOR = gql`
  query {
    author {
      name
      avatar_url
    }
    status @client {
      isHappy
    }
  }
`;

const Top: React.FC = () => (
  <Query query={GET_AUTHOR}>
    ({(loading, error, data)}) => (
    <>
      <p>{data.author.name} {data.status.isHappy}</p>
      <img src={data.author.avatar_url} />
    </>
    )
  </Query>
);
```

---

## 👎 複雑な処理を書くのはあまり向いてない

<br />

redux-saga などで複雑な処理を書く必要があるアプリケーションは苦手

---

<!-- note
もしこの話を聞いて、Apolloに興味をもってくれたら嬉しいです。
-->

## まとめ

<br />

* Apollo はエコシステムも含め充実している
* Redux で書いていたことを減らせる可能性が高い
* apollo-link-state は今後コアに入る
