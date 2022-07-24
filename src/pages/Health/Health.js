import LayoutComponent from '../../components/layout/LayoutComponent';
import RenderPage from '../../components/RenderPage/RenderPageComponent';

function Health() {
  const apiUrl =
    'https://api.nytimes.com/svc/topstories/v2/health.json?api-key=G3Zxr0y95aXHyAInrBCbNtumQd5BKg1h';

  return (
    <div>
      <LayoutComponent>
        <RenderPage url={apiUrl} />
      </LayoutComponent>
    </div>
  );
}

export default Health;
