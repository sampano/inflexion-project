import ChartBox from "../../components/chartBox/chartBox";
import TopBox from "../../components/top/TopBox";

import {
  chartBoxUser,
  newClient,
  todaysMoney,
  todaysUser,
  totalSales,
} from "../../data";
import "./home.scss";
import ActiveUsers from "../../components/activeUsers/activeUsers";
import SalesOVerview from "../../components/salesOverview/salesOverview";
import Projects from "../../components/projects/Projects";
import PurityDashboard from "../../components/purityDashboard/PurityDashboard";
import Rockets from "../../components/rockets/Rockets";
import OrdersOverview from "../../components/ordersOverview/OrdersOverview";
const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox {...todaysMoney} />
      </div>
      <div className="box box2">
        <TopBox {...todaysUser} />
      </div>
      <div className="box box3">
        <TopBox {...newClient} />
      </div>
      <div className="box box4">
        <TopBox {...totalSales} />
      </div>
      <div className="box box5">
        <PurityDashboard />
      </div>
      <div className="box box6">
        <Rockets />
      </div>
      <div className="box box7">
        <ActiveUsers />
      </div>
      <div className="box box8">
        <SalesOVerview />
      </div>
      <div className="box box9">
        <Projects />
      </div>
      <div className="box box10">
        <OrdersOverview />
      </div>
    </div>
  );
};

export default Home;
