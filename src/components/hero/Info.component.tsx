import HeroStyles from '../../styles/Hero.module.css';

export default function Info({ dates, location }: { dates: string; location: string }) {
    return (
        <div className={HeroStyles.infoContainer}>
            <div>
                <h2>Dates</h2>
                <p>{dates}</p>
            </div>
            <div>
                <h2>Lieu</h2>
                <p>{location}</p>
            </div>
        </div>
    );
}