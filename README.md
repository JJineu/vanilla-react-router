# vanila-react-router: React Router 구현하기
<br>

## 구현 목표
```tsx
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);

const { push } = useRouter();
```

1. **위 코드가 동작하도록 <Router> 와 <Route> 컴포넌트를 만든다.**
2. **다른 페이지로 이동하도록 useRouter 훅을 만든다.**
3. **브라우저 인터페이스(뒤로가기) 를 이용해 페이지를 이동할 수 있다.**
<br>

## 구현 과정
[https://ongoingjin.notion.site/vanilla-react-SPA-router-d8a6b288260a434ebdc5034194e571a4?pvs=4]
