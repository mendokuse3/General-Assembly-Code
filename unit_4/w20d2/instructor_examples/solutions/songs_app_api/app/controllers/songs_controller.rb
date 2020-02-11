class SongsController < ApplicationController
    def index
        songs = Song.all
        render json: {status: 200, songs: songs}
    end

    def show 
        p params
        song = Song.find(params[:id])
        render json: {status: 200, song: song}
    end

    def create
        song = Song.new(song_params)

        if song.save
            render(status: 201, json: { song: song })
        else
            render(status: 422, json: { song: song })
        end
    end

    def update
        song = Song.find(params[:id])
        song.update(song_params)
        render(status: 200, json: { song: song })
    end

    def destroy
        song = Song.destroy(params[:id])
        render(status: 204)
    end

    private # Any methods below here

    def song_params
        # Returns a sanitized hash of the params with nothing extra
        params.required(:song).permit(:title, :artist_name, :artwork)
    end
end