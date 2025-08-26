import React from 'react'

export const Formulario = () => {
  return (
    <div>
        <form
            action="https://formspree.io/f/xyzdykea"
            method="POST"
            >
            <label>
                Recomiéndame una canción:
                <input type="text" name="cancion" required placeholder="Nombre de la canción o artista" />
            </label>
            <button type="submit">enviar!</button>
        </form>
    </div>
  )
}
