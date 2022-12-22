using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
public class GameManager2 : Singleton<GameManager2>
{
    public bool IsShooting = false;
    public MagicHand SniperGun;
    public PlayerControllerHand player;
    public Camera _mainCam;
    public GameObject canvasshooting;
    public Image RedHeart; 
    [HideInInspector]
    public bool itsOver;
    public GameObject guide;
    public SoundManager soundfx;

    [Header("EndCard Stuff")]
    public GameObject eclose;
    public GameObject ecwin;
    [HideInInspector]
    public int numberofenemy = 0;

    public AudioSource backgroundFX;

    public void checkForVictory()
    {
        if (numberofenemy == 2)
        {
            Win();
        }
    }
    public void Win()
    {
        //ShowEndCasrd
        itsOver = true;
        SniperGun.gameObject.SetActive(false);
        backgroundFX.Stop();
        Luna.Unity.LifeCycle.GameEnded();
        ecwin.SetActive(true);
    }
    public void Start()
    {
    }

    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            if (guide.activeSelf)
            {
                guide.SetActive(false);
            }
            if (itsOver)
            {
                Luna.Unity.Playable.InstallFullGame();
            }
        }

    }

    public void changeCamEndGameLose(Camera a)
    {
        if (itsOver)
        {
            return;
        }
        itsOver = true;
        RedHeart.gameObject.SetActive(false);
        //_mainCam.gameObject.SetActive(false);
        //a.gameObject.SetActive(true);
        //canvasshooting.SetActive(false);
        Luna.Unity.LifeCycle.GameEnded();
        _mainCam.gameObject.transform.position = a.transform.position;
        _mainCam.transform.rotation = a.transform.rotation;
        guide.SetActive(false);
        SniperGun.gameObject.SetActive(false);
        player.enabled = false;
        eclose.SetActive(true);
        backgroundFX.Stop();
    }
}
