import styles from './styles.scss';
import { connect } from 'dva';
import {Button } from 'antd';
const CountApp = ({ home, dispatch }) => {
    const onClick = method => {
        dispatch({ type: `home/${method}`, payload: { userName: 'zrnokia5231', password: '12345678' } })
    }




    return (
        <div className={styles.normal}>
            <div className={styles.record}>Record: {home.record}</div>
            <div className={styles.current}>{home.current}</div>
            <p>{home.message}</p>
            <div className={styles.button}>
                <Button type="primary" onClick={() => { onClick('login') }}>+</Button>
            </div>
        </div>
        
    );


};



CountApp.propTypes = {

};

export default connect(state => state)(CountApp);