import styles from "./Card.module.css";

export const Card = ({category, setCategory, setCurrentQuestion, currentQuestion, currentQuestionIndex, setCurrentQuestionIndex}) => {
    return (
        <div className={styles.root}>
           <h2 className={styles.title}>Share Games</h2>
           <div className={styles.cardContainer}>
                <p className={styles.category}>{category}</p>
                <p className={styles.content}>{currentQuestion}</p>
           </div>
           <div className={styles.buttons}>
                <p
                    className={styles.QuestionFromSameCategory}
                    onClick={() => setCurrentQuestionIndex(currentQuestionIndex+1)}
                >Give me another question</p>
                <p className={styles.or}>or</p>
                <p
                    onClick={() => {
                        setCategory("");
                        setCurrentQuestion("");
                        setCurrentQuestionIndex(0);
                    }}
                    className={styles.ChangeCategory}>Change category</p>
           </div>
        </div>
    )
}