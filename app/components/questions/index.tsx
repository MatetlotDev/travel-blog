import Image from 'next/image';
import styles from './style.module.scss';

const Questions = () => {
  return (
    <section className={styles.wrapper}>
      <h2>Envie d&apos;en savoir plus ?</h2>
      <div className={styles.content}>
        <div className={styles.images}>
          <div className={`${styles['img-wrapper']} ${styles['img-1']}`}>
            <Image src="/menu/menu1.jpg" alt="" fill />
          </div>
          <div className={`${styles['img-wrapper']} ${styles['img-2']}`}>
            <Image src="/menu/menu2.jpg" alt="" fill />
          </div>
        </div>
        <div className={styles.text}>
          <h4>Pourquoi avoir créer ce blog ?</h4>
          <p>
            Aucun de nous deux n’est très accroché aux réseaux sociaux, nous n’y
            passons pas beaucoup de temps, voir n’y passons jamais. Mais nous
            avions tout de même envie de pouvoir partager avec les personnes qui
            nous entoure notre voyage et notre vie un peu différente d’une vie
            “classique” comme on l’entend. Justine rédactrice web et Matthias
            Développeur web c’est naturellement que le blog est venu.
          </p>
          <br />
          <br />
          <br />
          <h4>Alors qu’est ce que je peux trouver dans votre blog ?</h4>
          <p>
            Ici, on à décider d’essayer de te partager un maximum de notre
            aventure, tu pourra retrouver des images de nos différents voyage,
            des articles en tout genre, un journal de bord et même bientôt une
            map monde pour retrouver tout les endroits déjà visiter. Tu pourras
            trouver toutes les infos qu’il te faut pour te lancer dans ta propre
            aventure, l’inspiration, les conseils et la motivation ! Et si tu ne
            trouves pas ce que tu cherches, n’hésite pas à{' '}
            <a href="#">nous contacter</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Questions;
