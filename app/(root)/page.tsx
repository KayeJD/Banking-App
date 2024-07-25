import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
    const loggedIn = {firstName: 'Tochi', lastName: 'Obinma', email:'contact@gmail.com'};
    
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently"
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={225653.55}
                    />
                </header>

                RECENT TRANSACRTIONS
            </div>
            
        <RightSideBar 
        user={loggedIn}
        transations={[]}
        banks={[{currentBalance: 123.45}, {currentBalance: 123.45}]}
        />

        </section>
    )
}

export default Home
