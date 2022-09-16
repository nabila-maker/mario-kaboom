class JwtService {
  constructor(jwt, secret) {
    this.jwt = jwt;
    this.secret = secret;
  }

  decodeToken(token) {
    return this.jwt.verify(token, this.secret,(error, decodeToken)=>{if(error)console.log(error)});
    
  }

  async generateRefreshToken(user) {
    return await this.jwt.sign(user, this.secret, { expiresIn: '1y' });
  }

  async generateToken(data) {
    return await this.jwt.sign({...data,createdAt:Date.now}, this.secret, { expiresIn: '1800s' });
  }

}

export default JwtService;
