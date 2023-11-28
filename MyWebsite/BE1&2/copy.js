const fs = require('fs');
const path = require('path');

const args = process.argv
const source = args[2]
const target = args[3]
const extentions = [".txt",".png"]
console.log(args)



fs.readdir(source, (Error,files) => {

    if(Error){
        console.log(`Error reading directory: ${Error}`);
        process.exit();
    }


    for(let file of files){
        let ext = path.extname(file)
        if(extentions.includes(ext)){
            console.log(file)
            const sourcePath = path.join(source, file);
            const targetPath = path.join(target, file);
            
            fs.copyFile(sourcePath , targetPath, (Error) =>{
                if (Error){
                    console.log(`Error copying file: ${Error}`);
                    process.exit();
                }
                console.log("File copied")

            })
            
        }
    }
   
})
