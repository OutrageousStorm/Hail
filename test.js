/**
 * Hail Test Suite — JavaScript ADB automation
 */

const ADB = {
  async shell(cmd) {
    // Mock for testing
    console.log('[ADB]', cmd);
    return `Executed: ${cmd}`;
  },
  
  async disableApp(pkg) {
    return await this.shell(`pm disable-user --user 0 ${pkg}`);
  },
  
  async uninstallApp(pkg) {
    return await this.shell(`pm uninstall -k --user 0 ${pkg}`);
  },
  
  async grantPermission(pkg, perm) {
    return await this.shell(`pm grant ${pkg} ${perm}`);
  },
};

// Example usage
(async () => {
  console.log('Hail JavaScript Test');
  await ADB.disableApp('com.facebook.katana');
  await ADB.uninstallApp('com.twitter.android');
})();
