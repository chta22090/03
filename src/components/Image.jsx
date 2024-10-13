import favorite1 from '../images/favorite-1.jpg';
import favorite1th from '../images/favorite-1_th.jpg';
import favorite2 from '../images/favorite-2.jpg';
import favorite2th from '../images/favorite-2_th.jpg';
import favorite3 from '../images/favorite-3.jpg';
import favorite3th from '../images/favorite-3_th.jpg';
import favorite4 from '../images/favorite-4.jpg';
import favorite4th from '../images/favorite-4_th.jpg';

export default function Image() {
  return (
    <aside>
      <h2>Favourite photos</h2>
      <a href={favorite1}><img src={favorite1th} alt="Small black bird, black claws, long black slender beak, links to larger version of the image" /></a>
      <a href={favorite2}><img src={favorite2th} alt="Top half of a pretty bird with bright blue plumage on neck, light colored beak, blue headdress, links to larger version of the image" /></a>
      <a href={favorite3}><img src={favorite3th} alt="Top half of a large bird with white plumage, very long curved narrow light colored break, links to larger version of the image" /></a>
      <a href={favorite4}><img src={favorite4th} alt="Large bird, mostly white plumage with black plumage on back and rear, long straight white beak, links to larger version of the image" /></a>
    </aside>
  );
}