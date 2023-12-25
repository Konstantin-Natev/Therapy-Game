import { categories } from "../../common/data";
import styles from "./Filters.module.css";

export const Filters = ({setCategory, getAllQuestions}) => {
    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <span>Share game</span>
            </div>
            <div className={styles.categoriesContainer}>
                {categories.map((category, i) => (
                    <div key={i} className={styles.categoryTitleContainer} onClick={() => {
                            getAllQuestions();
                            setCategory(category);
                        }}>
                        <span className={styles.categoryTitle}>{category}</span>
                    </div>
                ))}
            </div>
            <div className={styles.selectCategory}>
                <span>Select Category</span>
            </div>
        </div>
    )
}