import './App.css'
import { Github , FileVideo , Upload , Wand2 } from 'lucide-react'
import { Button } from './components/ui/button';
import { Separator } from './components/ui/separator';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Slider } from './components/ui/slider';

export function App() {


  return (

      <div className='min-h-screen flex flex-col'>
          <header className='px-6 py-3 flex items-center justify-between border-b'>
            <h1 className='text-xl'>Upload-IA</h1>
            <div className='flex items-center gap-3'>
              <span className='text-sm text-muted-foreground'>Desenvolvido com ❤ no NLW da Rocketseat</span>

              <Separator orientation='vertical' className='h-6' />

              <Button variant='outline'> 
                <Github className='w-4 h-4 mr-2' /> 
                Github
              </Button>
            </div>
          </header>

          <main className='flex-1 p-6 flex gap-6'>
            <section className='flex flex-col flex-1'>
              <div className='grid grid-rows-2 gap-4 flex-1'>
                <Textarea
                  className='resize-none p-5 leading-relaxed' 
                  placeholder='Inclua o promp para a IA...' 
                />
                <Textarea
                  className='resize-none p-5 leading-relaxed' 
                  placeholder='Resultado gerado pela IA...' 
                  readOnly 
                />
              </div>
              <p className='text-sm text-muted-foreground'>
                Lembre-se: Você pode utilizar a variável <code className='text-violet-600'>{'{transcription}'}</code> no seu prompt para adicionar o conteudo  da transcrioção do video selecionado
              </p>
            </section>
            <aside className='w-80 space-y-6'>
              <form action="" className='space-y-6'>
                <label htmlFor="video" className='border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5'>
                  <FileVideo />
                  Selecione um video
                </label>
                <input type="file" id='video' accept='video/mp4' className='sr-only' />

                <Separator />

                <div className='space-y-2'>
                  <Label htmlFor='transcription_prompt'>Prompt de transcrição</Label>
                  <Textarea 
                    id='trasncription_prompt' 
                    className='h-20 leading-relaxed resize-none'
                    placeholder='Inclua palavras-chaves mencionadas no video separadas por virgula(,)'
                  />
                  <Button type='submit' className='w-full gap-2'>
                    Carregar video
                    <Upload className='w-4 h-4' />
                  </Button>
                </div>
              </form>

              <Separator />

              <form action="" className='space-y-6'>

              <div className='space-y-4'>
                  <Label>Prompt</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder='Selecione um Prompt' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='title'>Titulo do YouTube</SelectItem>
                      <SelectItem value='description'>Descrição do YouTube</SelectItem>
                    </SelectContent>
                  </Select>

                  <span className='block text-xs text-muted-foreground italic'>Você poderá customizar essa opção em breve!</span>
                </div>

                <Separator />

                <div className='space-y-4'>
                  <Label>Modelo</Label>
                  <Select disabled defaultValue='gpt3.5'>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='gpt3.5'>GPT 3.5-turbo 16k</SelectItem>
                    </SelectContent>
                  </Select>

                  <span className='block text-xs text-muted-foreground italic'>Você poderá customizar essa opção em breve!</span>
                </div>

                <Separator />

                <div className='space-y-4'>
                  <Label>Temperatura</Label>
                  <Slider 
                    min={0}
                    max={1}
                    step={0.1}
                  />

                  <span className='block text-xs text-muted-foreground italic'>Valores mais altos tendem a deixar o resultado mais criativo e com possiveis erros.</span>
                  
                  <Separator />

                  <Button type='submit' className='w-full gap-2'>
                    Executar
                    <Wand2 className='w-4 h-4' />
                  </Button>
                </div>
              </form>
            </aside>
          </main>
      </div>

  )
}

