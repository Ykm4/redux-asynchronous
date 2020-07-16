React + Reduxを使ったTodoApp

[must]
- task作成、削除
- 作成後のtaskを編集可
- mock-serverを導入して非同期処理を実装
- Reduxを使用してstoreで状態を管理
- Container Component, Presentationl Componentを意識したコーティング
- スタイリングはStyled-Componentライブラリを使用

[need]
- TypeScriptで記述(未実装なので今後実装していく予定)

今回、mock-serverにはjson-serverを採用して実装していますがNode.js(express)で書き換える予定です。

Reduxでの非同期処理の正解が分からず**Redux-thun**kを導入してActionに非同期処理を書いていましたが、Actionが肥大していきそうだと感じたので**Custom Hooks**を用いての記述に変更しました。


# react/how-to-learn

1. Reactの基礎を学ぶ

* なぜ Reactが普及したのか
[Reactとその誕生の背景](https://www.youtube.com/watch?v=MC7uOm04NOk)

React誕生の話だけでなくJavaScriptの歴史についても触れるので分かりやすい。
[Quora](https://jp.quora.com/react%E3%81%AE%E5%9F%BA%E6%9C%AC%E3%81%8Cnode-js%E3%81%A0%E3%81%A8%E8%81%9E%E3%81%84%E3%81%9F%E3%81%AE%E3%81%A7%E3%81%99%E3%81%8C%E3%81%A9%E3%81%86%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%81%99%E3%81%8B-)

* PropsとStateについて

bitAで購読しているCodeGridで学ぶ事ができる
[これから始めるReact.js](https://www.codegrid.net/series/2016-react)

CODEPREPのReactの基礎を学ぶ
[CODEPREP: 初めてのReact](https://codeprep.jp/books/104)

React チュートリアルも分かりやすいが先にCODEPREPもしくはCodeGridから始めるとより理解が深まると思う
[React チュートリアル](https://ja.reactjs.org/tutorial/tutorial.html)

* ライフサイクルについて
パフォーマンスを意識したコードを書く際にコンポーネントのライフサイクルについて学ぶ必要がある
最初から完璧に理解するのは難しいのでざっくりとどういったメソッドがあるのかを抑えておく

- Mounting
コンポーネントが生成されDOMノード挿入されるフェーズ
- Updating
変更を検知してコンポーネントが再レンダリングされるフェーズ
- Unmounting
コンポーネントがDOMノードから削除されるフェーズ

[React(v16.4) コンポーネントライフサイクルメソッドまとめ](https://qiita.com/Julia0709/items/3c3fc8d29fd2e56ed7a9)

[React Component ライフサイクル ひとめぐり (CodeSandbox 付き)](https://iktakahiro.hatenablog.com/entry/2018/05/28/123000)


2. React Hooksを学ぶ
新規プロジェクトでReactを書く場合はほぼFunctional Componentで記述することになる。
その理由としてhooksという強力な機能が追加されたから。
→ hooksを使用する事で関数コンポーネントにLocal StateやライフサイクルといったReactが持つ機能に接続(hook into)出来る様になった

hooks導入前は`Recompose`というライブラリを使用して関数コンポーネントにLocal State、ライフサイクルメソッドといったクラスコンポーネントが持つ機能を付与していたらしい。

※ Recomposeの作者である Andrew ClarkがFacebookのReactチームから招待を受けて開発されたのがhooks
 手を動かしながらhooks(useEffect、useReducer、useContext、useState等)を体系的に学べる
[React Hooks 入門 - Hooksと Redux を組み合わせて最新のフロントエンド状態管理手法を習得しよう！](https://www.udemy.com/course/react-hooks-101/)

コードの例があって理解しやすかった
[最近Reactを始めた人向けのReact Hooks入門](https://sbfl.net/blog/2019/11/12/react-hooks-introduction/)

呼ばれるタイミングがイマイチ分からなかったuseEffectについて分かりやすく解説していた
[関数型Reactコンポーネントでレンダリングと副作用Hookが実行されるタイミング](https://www.hypertextcandy.com/when-hook-is-called)

内部的な処理まで書いているので勉強になった記事
[実践: React Hooks](https://mizchi.hatenablog.com/entry/2019/02/08/154010)

3. 中・大規模アプリ向けの状態管理の方法を学ぶ
Reactだけでユーザーのログイン状態を管理しようとすると上位のコンポーネントにStateを持たせて、その状態を子や孫コンポーネントにPropsでバケツリレーをすることになる。。(Reactがデフォルトの機能として持っているuseContext, useReducerを用いればこの問題は解決できる)

Reduxを使ってアプリの状態を管理する
→ ログイン・非ログイン状態などのコンポーネントを跨いで保持したい状態が存在する事が出てきた場合にReduxなどのライブラリは有効になる

ただReduxの学習コストは結構高い
→ Reduxをいきなり学ぶのではなくFluxアーキテクチャについて学ぼう

Store, View, Dispatcher, Actionそれぞれの役割を理解する
[漫画で説明するFlux](https://medium.com/samyamashita/%E6%BC%AB%E7%94%BB%E3%81%A7%E8%AA%AC%E6%98%8E%E3%81%99%E3%82%8B-flux-1a219e50232b)

Fluxについての基礎知識が付いたらReact - Reduxについて学習する

Reducer,  ActionCreator, Storeなどのコードを例に説明しているので理解しやすい
[Redux の利点を振り返る - Speaker Deck](https://speakerdeck.com/takefumiyoshii/redux-falseli-dian-wozhen-rifan-ru)

Reduxの導入を楽にする Redux Toolkitについて触れている
[HookとRedux ToolkitでReact Reduxに入門する](https://www.hypertextcandy.com/learn-react-redux-with-hooks-and-redux-starter-kit)

ReduxだけでなくHooks API(useReducer, useContext)での状態管理方法を紹介している
[ベストな手法は？ Reactのステート管理方法まとめ - ICS MEDIA](https://ics.media/entry/200409/)

Reduxについて
[JavaScript-Plugin-Architecture/README.md at master · azu/JavaScript-Plugin-Architecture · GitHub](https://github.com/azu/JavaScript-Plugin-Architecture/blob/master/ja/Redux/README.md)
