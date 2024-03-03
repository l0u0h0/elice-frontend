// Component
import FooterComponent from "../components/common/FooterComponent";
import HeaderComponent from "../components/common/HeaderComponent";
import ListContainer from "../container/ListContainer";
import SearchContainer from "../container/SearchContainer";

const CoursePage = () => {
  return (
    <>
      <HeaderComponent />
      <SearchContainer />
      <ListContainer />
      <FooterComponent />
    </>
  );
};

export default CoursePage;
