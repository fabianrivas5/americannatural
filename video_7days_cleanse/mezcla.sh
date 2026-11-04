#!/usr/bin/env bash
# Uso: ./mezcla.sh assets/voz.mp3   -> video_final_9x16.mp4 (voz + música -22 dB con ducking + efectos)
#      ./mezcla.sh                  -> video_sin_voz.mp4 (solo música y efectos, para revisar ritmo)
set -e
D=$(python3 -c "import json;print(json.load(open('timeline.json'))['duracion_s'])")
ENC="-c:v libx264 -pix_fmt yuv420p -crf 18 -preset veryfast -r 30 -c:a aac -b:a 192k -ar 48000 -movflags +faststart"
if [ -n "$1" ]; then
  ffmpeg -y -loglevel error -i video_mudo.mp4 -i "$1" -i assets/musica.wav -i assets/fx.wav -filter_complex \
  "[1:a]aresample=48000,aformat=channel_layouts=stereo,apad,atrim=0:$D,asplit=2[v][sc];\
   [2:a]volume=-22dB[m];[m][sc]sidechaincompress=threshold=0.02:ratio=4:attack=30:release=350[md];\
   [3:a]volume=-9dB[f];[v][md][f]amix=inputs=3:normalize=0:duration=first,loudnorm=I=-14:TP=-1.5:LRA=11[a]" \
  -map 0:v -map "[a]" $ENC -t $D video_final_9x16.mp4
  echo video_final_9x16.mp4
else
  ffmpeg -y -loglevel error -i video_mudo.mp4 -i assets/musica.wav -i assets/fx.wav -filter_complex \
  "[1:a]volume=-10dB[m];[2:a]volume=-6dB[f];[m][f]amix=inputs=2:normalize=0[a]" -map 0:v -map "[a]" $ENC -t $D video_sin_voz.mp4
  echo video_sin_voz.mp4
fi
