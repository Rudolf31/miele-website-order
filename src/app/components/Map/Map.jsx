export default function Map() {
    return (
    <div className='rounded-lg mb-20' style={{ position: 'relative', overflow: 'hidden' }}>
        <a
        href="https://yandex.ru/maps/org/moskovskiy_kreml/1023322799/?utm_medium=mapframe&utm_source=maps"
        style={{
            color: '#eee',
            fontSize: '12px',
            position: 'absolute',
            top: '0px'
        }}
        >
        Московский Кремль
        </a>
        <a
        href="https://yandex.ru/maps/213/moscow/category/museum/184105894/?utm_medium=mapframe&utm_source=maps"
        style={{
            color: '#eee',
            fontSize: '12px',
            position: 'absolute',
            top: '14px'
        }}
        >
        Музей в Москве
        </a>
        <a
        href="https://yandex.ru/maps/213/moscow/category/landmark_attraction/89683368508/?utm_medium=mapframe&utm_source=maps"
        style={{
            color: '#eee',
            fontSize: '12px',
            position: 'absolute',
            top: '28px'
        }}
        >
        Достопримечательность в Москве
        </a>
        <iframe
        src="https://yandex.ru/map-widget/v1/?ll=37.621920%2C55.740697&mode=poi&poi%5Bpoint%5D=37.618878%2C55.751427&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1023322799&z=14.69"
        width={'100%'}
        height="300"
        frameBorder={1}
        allowFullScreen={true}
        style={{ position: 'relative' }}
        />
    </div>
    );
}

