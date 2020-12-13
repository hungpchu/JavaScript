/**
 *
 */

class GitHub {
  constructor() {
    this.clien_id = "c5fcec208df8bf76f0c9";
    this.client_secret = "18f80022578a711372b2b92ff0fad18ba72fe7b3";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user, addAuth) {
    let authentication = addAuth
      ? `?client_id=${this.client_id}$client_secret=${this.client_secret}`
      : "";

    const profileResponse = await fetch(
      `https://api.github.com/users/${user}${authentication}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}${authentication}`
    );

    //  have to add await here
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
