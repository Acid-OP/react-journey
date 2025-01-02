const style = {
    width: 250,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    padding: 20,
    margin: 10,
  };
  
  
  export function PostComponent({ name, followerCount, time, image, description }) {
    
    return (
        
        <div style={style}>
            
            <div style={{ display: "flex" }}>
                <img src={image} style={{ width: 40, height: 40, borderRadius: 40 }} />
                <div style={{ fontSize: 14, marginLeft: 10 }}>
                    <b>{name}</b> 
                    <div>{followerCount} followers</div>
                    {(time !== undefined) ? <div style={{display:"flex"}}>
                    <div>{time}</div>
                    <img src={"data:image/jpeg;base64,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"} style={{width:15 , height:15}} />
                    </div> : null}
                </div>
            </div>
  
            <div style={{ fontSize: 14 }}>{description}</div>
        </div>
    );
  }
  