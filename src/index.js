import Phaser from 'phaser';

class Game extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    // this.load.spritesheet('dude',
    //   'assets/dude.png', {
    //     frameWidth: 32,
    //     frameHeight: 48
    //   }
    // );
    this.load.atlasXML('dude', 'assets/character_maleAdventurer_sheet.png', 'assets/character_maleAdventurer_sheet.xml');
  }

  create() {
    this.add.image(400, 300, 'sky');

    // var atlasTexture = this.textures.get('dude');

    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');
    this.platforms.create(750, 220, 'ground');

    this.player = this.physics.add.sprite(196, 128, 'dude');
    this.player.setBounce(0.1);
    this.player.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, this.platforms);

    this.anims.create({
        key: 'walk',
        frames: this.anims.generateFrameNames('dude', { prefix:'walk', start: 0, end: 7 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'idle',
        frames: [ { key: 'dude', frame: 'idle' } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'jump',
        frames: [ { key: 'dude', frame: 'jump' } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'fall',
        frames: [ { key: 'dude', frame: 'fall' } ],
        frameRate: 20
    });

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {

    if (this.cursors.left.isDown) {
        this.player.setVelocityX(-160);
        if (this.player.body.touching.down) {
          this.player.anims.play('walk', true);
        }
        this.player.flipX = true;

    } else if (this.cursors.right.isDown) {
        this.player.setVelocityX(160);
        if (this.player.body.touching.down) {
          this.player.anims.play('walk', true);
        }
        this.player.flipX = false;

    } else {
        this.player.setVelocityX(0);
        if (this.player.body.touching.down) {
          this.player.anims.play('idle');
        }
    }

    if (!this.player.body.touching.down) {
      if (this.player.body.velocity.y < 0) {
        this.player.anims.play('jump');
      } else {
        this.player.anims.play('fall');
      }
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
        this.player.setVelocityY(-330);
    }
  }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: Game
};

const game = new Phaser.Game(config);
