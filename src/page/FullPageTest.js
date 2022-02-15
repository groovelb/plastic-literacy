import ReactPageScroller from 'react-page-scroller';
import Page from '../components/layout/Page';
import styled, { keyframes } from "styled-components";

const Link = styled.a`
  width: 800px;
  height: 200px;
  font-size: 48px;
  margin:0 auto;
  font-weight: bold;
  ${props => props.theme.layout.flexColCenter}
  background-color: #fff;
  color: #000;
  scroll-behavior: inherit;
  scroll-snap-align: center;
  pointer-events: none;
`;

const FullPageTest = ({ }) => {
  let pageList = [];
  const pageNum = 12;
  for (let i = 0; i < pageNum; i++) {
    pageList.push(i);
  }
  console.log(pageList);
  const onPageChange = (number) => {
    console.log('landing to ' + number);
  }
  const onPageBeforeChange = (number) => {
    console.log('going to ' + number);
  }
  return (
    <ReactPageScroller
      pageOnChange={onPageChange}
      onBeforePageScroll={onPageBeforeChange}
      renderAllPagesOnFirstRender={true}
      animationTimer={750}
    >
      {
        pageList.map((page, i) =>
          <Page themeType={'dark'}>
            <Link href={'https://dddesign.io'} target='_blank'>
              Let's Go 
              {i}
            </Link>
          </Page>
        )
      }
    </ReactPageScroller>

  )
}

export default FullPageTest;