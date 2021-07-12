//Http Module-- creating server using node js

const http = require('http')
const path = require('path')
const fs = require('fs')

const app = http.createServer((req, res) => {

    res.writeHead(200,{
        'content-type': 'text/html'
    })
    
    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname, "public", "index.html") , (err, content) => {
    //         if(err) {
    //             throw err
    //         }
    //         res.end(content)
    //    })
    // }   else if(req.url === '/about'){
    //     fs.readFile(path.join(__dirname, "public", "about.html") , (err, content) => {
    //         if(err) {
    //             throw err
    //         }
    //         res.end(content)
    //    })
    // }    

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html': req.url /*+ '.html'*/)
    
    let contentType = 'text/html'
    let ext = path.extname(filePath)
    if(!ext){
         filePath += '.html'
    }
       
    switch(ext) {
        case '.css':
        contentType = 'text/css'
        break
        
        case '.js':
        contentType = 'text/javascript'
        break
        
    default :
    contentType = 'text/html'

    }



    fs.readFile(filePath, (err, content) => {

         if(err){
             fs.readFile(path.join(__dirname,'public','error.html'),(err, data) => {
               if(err) {
                req.writeHead(500)
                res.end('Error!!')
               } else {

                    res.writeHead(404, {
                        'content-type': contentType
                    })
                   res.end(data)
               }
                
             } )
         }  else {
            res.writeHead(200,{
                'content-type': contentType
             })
             res.end(content);
         }
         

        //   if(err){
        //       req.writeHead(500)
        //       res.end('Error!!')
        //   }
    })

})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
