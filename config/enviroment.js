const devlopment={
    name: "devlopment",
    
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth:{
            user: 'shoaibakhtar9430@gmail.com',
            pass: 'Raja9430@@'
        }
    },

    google_client_id: "658894926718-lal7jmnk58msf1h72k7c6bl2ut1j1ipa.apps.googleusercontent.com",
    google_client_secret: "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",
    google_call_back_url: "http://localhost:8003/users/auth/google/callback"
        
    
}

const production = {
    name: "production"
}



module.exports = devlopment
