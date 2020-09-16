export default class PlaceholderService {
  API_URL = "./nations.json";
  async getData() {
    const res = await fetch(`${this.API_URL}`);

    if (!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`);
    }

    const body = await res.json();
    return body;
  }
}
