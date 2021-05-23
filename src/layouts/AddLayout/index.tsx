import styles from './add.module.scss';

export function AddLayout() {
    
    return (
        <div className="content">
            <h3 className={ styles.title }>Создайте новое задание</h3>
            <p>Введите новый материал для данного урока. После проверки он станет доступен всем при подготовке и соревнованиях.</p>
        </div>
    );
}
  