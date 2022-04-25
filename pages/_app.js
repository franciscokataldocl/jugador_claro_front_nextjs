
import ResetStyles from './../components/styles/ResetStyles';
import GlobalStyles from './../components/styles/GlobalStyles';




//nuevos
import { TimerProvider } from "../context/timerContext";
import { CounterProvider } from '../context/counterContext';
import { PlayerProvider } from '../context/playerContext';
import { EstadoPartidoProvider } from '../context/estadoPartidoContext';
import { UserProvider } from '../context/userContext';
import { QuizProvider } from '../context/quizContext';
import { QuestionsProvider } from '../context/questionContext';
import { ShowHideProvider } from '../context/ShowHideContext';














function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ResetStyles />
      <GlobalStyles />
      <EstadoPartidoProvider>
        <TimerProvider>
          <CounterProvider>
            <PlayerProvider>
              <UserProvider>
                <QuizProvider>
                  <QuestionsProvider>
                    <ShowHideProvider>
                      <Component {...pageProps} />
                    </ShowHideProvider>
                  </QuestionsProvider>
                </QuizProvider>
              </UserProvider>
            </PlayerProvider>
          </CounterProvider>
        </TimerProvider>
      </EstadoPartidoProvider>
    </div>
  );
}

export default MyApp
