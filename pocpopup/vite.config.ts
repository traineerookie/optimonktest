import {resolve} from 'path'
import {defineConfig} from 'vite'

const outdir = resolve(__dirname,'dist')

export default defineConfig({
    build:{
        outDir:outdir,
        emptyOutDir:true,
        rollupOptions:{
            input:{
                main:resolve(__dirname,'src/index.html'),
            }
        }
    }
})