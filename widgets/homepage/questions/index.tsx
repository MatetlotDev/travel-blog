import Image from 'next/image';
import { QuestionContainer, QuestionImages, QuestionText } from './wrappers';

const Questions = () => {
  return (
    <QuestionContainer>
      <h2>Des questions ?</h2>
      <div className="content">
        <QuestionImages>
          <div className="img-wrapper img-1">
            <Image src="/menu/menu1.jpg" alt="" fill />
          </div>
          <div className="img-wrapper img-2">
            <Image src="/menu/menu2.jpg" alt="" fill />
          </div>
        </QuestionImages>
        <QuestionText>
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
        </QuestionText>
      </div>
    </QuestionContainer>
  );
};

export default Questions;
