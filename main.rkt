#lang racket

(require raylib/2d/unsafe)

(begin
    (InitWindow 100 100 "test")
    (let loop ()
      (WindowShouldClose)   ; used only to process events
      (println (IsKeyDown KEY_A))
      (unless (IsKeyDown KEY_Aes)
        (loop)))
    (CloseWindow))
