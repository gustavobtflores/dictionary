import {
  Container,
  Definition,
  Header,
  Meaning,
  MeaningsContainer,
  MeaningType,
  SearchInput,
  Synonyms,
  SynonymsList,
  WordContainer,
} from "@/styles/pages/home";
import { Lora } from "@next/font/google";
import axios, { AxiosError } from "axios";
import Head from "next/head";
import nProgress from "nprogress";
import { Book as BookIcon } from "phosphor-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const lora = Lora({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

interface Word {
  name: string;
  phonetic: string;
  meanings: {
    partOfSpeech: string;
    antonyms: string[];
    synonyms: string[];
    definitions: {
      definition: string;
      example: string;
    }[];
  }[];
}

interface HomeProps {
  initialWord: Word;
}

export default function Home({ initialWord }: HomeProps) {
  const [word, setWord] = useState<Word>(initialWord);

  async function handleWordSearch(word: string) {
    nProgress.start();

    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      const { word: name, phonetic, meanings } = response.data[0];

      setWord({ name, phonetic, meanings });
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        toast.error((err.response?.data as any).message, {
          position: "top-right",
        });
      }
    }

    nProgress.done();
  }

  return (
    <>
      <Head>
        <title>Dictionary</title>
        <style jsx global>
          {`
            input {
              font-family: ${lora.style};
            }
          `}
        </style>
      </Head>
      <Container className={lora.className}>
        <Toaster />
        <Header>
          <BookIcon size={48} color="#838383" />
        </Header>
        <SearchInput
          type="text"
          placeholder="Search any word to see the definition"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleWordSearch((event.target as HTMLInputElement).value);
            }
          }}
        />
        <WordContainer>
          <h1>{word.name}</h1>
          <span>{word.phonetic}</span>
          <MeaningsContainer>
            {word.meanings.map((meaning, index) => (
              <Meaning key={index}>
                <MeaningType>
                  <strong>{meaning.partOfSpeech}</strong>
                  <hr />
                </MeaningType>
                <span>Meaning</span>
                <ul>
                  {meaning.definitions.map(({ definition, example }) => (
                    <Definition key={definition}>
                      <p>{definition}</p>
                      <p>{example}</p>
                    </Definition>
                  ))}
                </ul>
                {meaning.synonyms.length > 0 && (
                  <Synonyms>
                    <strong>Synonyms</strong>
                    <SynonymsList>
                      {meaning.synonyms
                        .filter(
                          (synonym, index) =>
                            meaning.synonyms.indexOf(synonym) === index
                        )
                        .map((synonym) => (
                          <span key={synonym}>{synonym}</span>
                        ))}
                    </SynonymsList>
                  </Synonyms>
                )}
              </Meaning>
            ))}
          </MeaningsContainer>
        </WordContainer>
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await axios.get(
    "https://api.dictionaryapi.dev/api/v2/entries/en/amazing"
  );

  const { word: name, phonetic, meanings } = response.data[0];

  return {
    props: {
      initialWord: {
        name,
        phonetic,
        meanings,
      },
    },
  };
};
