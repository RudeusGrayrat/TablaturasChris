import Cards from '@/components/Cards/Cards';

export default function Main() {
    return (
        <div className=''>
            <div className=' text-center pt-16'>
                <h1 className='  text-6xl'>Te ofrezco </h1>
            </div>
            <div className='flex flex-wrap p-20 pt-12 justify-center'>
                <Cards
                    imageUrl='/imagenPartitura.jpeg'
                    title='Partituras'
                    description='las partituras son.......'>
                </Cards>
                <Cards
                    imageUrl='/imagenPartitura.jpeg'
                    title='Partituras'
                    description='las partituras son.......'>
                </Cards>
                <Cards
                    imageUrl='/imagenPartitura.jpeg'
                    title='Partituras'
                    description='las partituras son.......'>
                </Cards>
                <Cards
                    imageUrl='/imagenPartitura.jpeg'
                    title='Partituras'
                    description='las partituras son.......'>
                </Cards>
            </div>
        </div>
    )
}