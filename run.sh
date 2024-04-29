npm install
cd code
esbuild main.js --bundle > build.js
cd ..
python3 -m http.server 8080