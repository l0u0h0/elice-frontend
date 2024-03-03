// style
import ListCardComponent from "../components/list/ListCardComponent";
import * as S from "../styles/list/list.style";

const ListContainer = () => {
  const listCount = 284;
  const list = [
    {
      title: "엘카데미 후기 게시판",
      text: "rkddml rufwp wjs, gnrl tmfWJr qhrl",
      price: "무료",
      thumbnail:
        "https://cdn-api.elice.io/api/file/7a34a8eff28e45eeae9c2e4dcc484dfc/%EC%8D%B8%EB%84%A4%EC%9D%BC.png?se=2024-03-14T00%3A15%3A00Z&sp=r&sv=2021-12-02&sr=b&sig=QbdE/OaWFOMzWvFww0YB0qXcumyOe/MCmEiUg00PJzI%3D",
      type: null,
    },
    {
      title: "엘카데미 후기 게시판",
      text: "rkddml rufwp wjs, gnrl tmfWJr qhrl",
      price: "무료",
      thumbnail:
        "https://cdn-api.elice.io/api/file/7a34a8eff28e45eeae9c2e4dcc484dfc/%EC%8D%B8%EB%84%A4%EC%9D%BC.png?se=2024-03-14T00%3A15%3A00Z&sp=r&sv=2021-12-02&sr=b&sig=QbdE/OaWFOMzWvFww0YB0qXcumyOe/MCmEiUg00PJzI%3D",
      type: null,
    },
    {
      title: "엘카데미 후기 게시판",
      text: "rkddml rufwp wjs, gnrl tmfWJr qhrl",
      price: "무료",
      thumbnail:
        "https://cdn-api.elice.io/api/file/7a34a8eff28e45eeae9c2e4dcc484dfc/%EC%8D%B8%EB%84%A4%EC%9D%BC.png?se=2024-03-14T00%3A15%3A00Z&sp=r&sv=2021-12-02&sr=b&sig=QbdE/OaWFOMzWvFww0YB0qXcumyOe/MCmEiUg00PJzI%3D",
      type: null,
    },
    {
      title: "엘카데미 후기 게시판",
      text: "rkddml rufwp wjs, gnrl tmfWJr qhrl",
      price: "무료",
      thumbnail:
        "https://cdn-api.elice.io/api/file/7a34a8eff28e45eeae9c2e4dcc484dfc/%EC%8D%B8%EB%84%A4%EC%9D%BC.png?se=2024-03-14T00%3A15%3A00Z&sp=r&sv=2021-12-02&sr=b&sig=QbdE/OaWFOMzWvFww0YB0qXcumyOe/MCmEiUg00PJzI%3D",
      type: "웹",
    },
    {
      title: "엘카데미 후기 게시판",
      text: "rkddml rufwp wjs, gnrl tmfWJr qhrl",
      price: "무료",
      thumbnail:
        "https://cdn-api.elice.io/api/file/7a34a8eff28e45eeae9c2e4dcc484dfc/%EC%8D%B8%EB%84%A4%EC%9D%BC.png?se=2024-03-14T00%3A15%3A00Z&sp=r&sv=2021-12-02&sr=b&sig=QbdE/OaWFOMzWvFww0YB0qXcumyOe/MCmEiUg00PJzI%3D",
      type: null,
    },
    {
      title: "엘카데미 후기 게시판",
      text: "rkddml rufwp wjs, gnrl tmfWJr qhrl",
      price: "0",
      thumbnail:
        "https://cdn-api.elice.io/api/file/7a34a8eff28e45eeae9c2e4dcc484dfc/%EC%8D%B8%EB%84%A4%EC%9D%BC.png?se=2024-03-14T00%3A15%3A00Z&sp=r&sv=2021-12-02&sr=b&sig=QbdE/OaWFOMzWvFww0YB0qXcumyOe/MCmEiUg00PJzI%3D",
      type: null,
    },
  ];

  return (
    <S.ListLayout>
      <div className="total-count">
        <p>전체 {listCount}개</p>
      </div>
      <S.ListContainer>
        {list.map((e, i) => (
          <ListCardComponent
            title={e.title}
            type={e.type}
            text={e.text}
            thumbnail={e.thumbnail}
            price={e.price}
            key={`course-list-${i}`}
          />
        ))}
      </S.ListContainer>
    </S.ListLayout>
  );
};

export default ListContainer;
