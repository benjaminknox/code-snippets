# Updates to package.json scripts:

# Add this property name: build-websocket-server
# This output here should match your resulting build directory
tsc src/lib/websockets/start-websocket-server.ts --target esnext --outDir build --moduleResolution nodenext --module nodenext

# Update the build property to this:
vite build && npm ru build-websocket-server
