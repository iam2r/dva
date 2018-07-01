import { connect } from 'dva';
import styles from './styles.scss';
import dynamic from 'dva/dynamic';// 通过dynamic实现动态加载路由、model

const Home = ({ history, dispatch }) => {
    const { app } = history;
    const Count = dynamic({
        app,
        component: () => import('../../components/Count'),
    });
    return (
        <div className={styles.welcome}>
            <Count> </Count>
        </div>

    );
}

Home.propTypes = {
};

export default connect(state => state)(Home);