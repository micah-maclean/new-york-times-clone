import LayoutComponent from '../../components/layout/LayoutComponent';
import RenderPage from '../../components/RenderPage/RenderPageComponent';

function Science() {
  const apiUrl =
    'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=G3Zxr0y95aXHyAInrBCbNtumQd5BKg1h';

  return (
    <div>
      <LayoutComponent>
        <RenderPage url={apiUrl} />
      </LayoutComponent>
    </div>
  );
}
export default Science;
