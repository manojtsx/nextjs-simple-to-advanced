import styles from "./login.module.css"
export default function Page(){
    const signIn = (search:string) =>{

    }
    return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} >
          Sign in with Google
        </div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
    )
}