export default function Home() {

  return (

    <div className="video-crop">
      <div className="video-container">
        <iframe
          allowFullScreen
          src="https://videocloud.instream.audio:2000/VideoPlayer/radiomaria?html5ui=1&autoplay=1&muted=0" />
      </div>
    </div>
  )
}
